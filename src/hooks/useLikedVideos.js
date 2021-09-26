import axios from "axios";
import { useData } from "../Contexts/DataProvider";
import { Toast } from "../Components/Toast";
import url from "../config";
import { useAuth } from "../Contexts/AuthProvider";
import { useModal } from "../Contexts/ModalProvider";
import { itemInWatchlater } from "../Utils/utils";

export const useLikedVideos = () => {
  const { dataDispatch, watchlater } = useData();
  const { token } = useAuth();
  const { toggleModalVisibility } = useModal();

  const addToLikedVideos = (item, setLikedVideosLoad) => {
    if (token) {
      handleAddToLikedVideos(item, setLikedVideosLoad);
    } else {
      Toast("Save to likedVideos, after signing in. Please Sign In");
    }
  };

  const handleAddToLikedVideos = async (item, setLikedVideosLoad) => {
    setLikedVideosLoad((prev) => !prev);
    try {
      const response = await axios.post(`${url}likedVideos/userId`, {
        likedVideosUpdate: {
          likedVideos: [
            {
              video: item._id,
            },
          ],
        },
      });
      if (response.status === 200) {
        dataDispatch({
          type: "ADD_TO_LIKEDVIDEOS",
          payload: { _id: item._id, video: item },
        });
        Toast("Added To Liked Videos");
      }
    } catch (err) {
      console.log(err);
    }
    setLikedVideosLoad((prev) => !prev);
  };

  const handleRemoveLikedVideosItem = async (item, setLikedVideosLoad) => {
    setLikedVideosLoad((prev) => !prev);
    try {
      const response = await axios.delete(
        `${url}likedVideos/userId/${item._id}`
      );
      if (response.status === 200) {
        dataDispatch({ type: "REMOVE_ITEM_FROM_LIKEDVIDEOS", payload: item });
        Toast("Removed From LikedVideos");
      }
    } catch (err) {
      console.log(err);
    }
    setLikedVideosLoad((prev) => !prev);
  };

  const handleAddToWatchlaterFromPage = async (item, setWatchlaterLoad) => {
    setWatchlaterLoad((prev) => !prev);
    const isItemInWatchlater = itemInWatchlater(watchlater, item);
    try {
      if (!isItemInWatchlater) {
        const response = await axios.post(`${url}watchlater/userId`, {
          watchlaterListUpdate: {
            watchlater: [
              {
                video: item._id,
              },
            ],
          },
        });
        if (response.status === 200) {
          dataDispatch({
            type: "ADD_TO_WATCHLATER",
            payload: item,
          });
          Toast("Added To Watchlater");
        }
      } else {
        Toast("Saved to Watchlater");
      }
    } catch (err) {
      console.log(err);
    }
    setWatchlaterLoad((prev) => !prev);
  };

  return {
    addToLikedVideos,
    handleAddToLikedVideos,
    handleRemoveLikedVideosItem,
    handleAddToWatchlaterFromPage,
  };
};
