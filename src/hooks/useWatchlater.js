import axios from "axios";
import { useData } from "../Contexts/DataProvider";
import { Toast } from "../Components/Toast";
import url from "../config";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { itemInWatchlater } from "../Utils/utils";
import { useModal } from "../Contexts/ModalProvider";

export const useWatchlater = () => {
  const { dataDispatch, watchlater } = useData();
  const { token } = useAuth();
  const { toggleModalVisibility } = useModal();

  const addToWatchlater = (item, setWatchlaterLoad) => {
    if (token) {
      const isItemInWatchlater = itemInWatchlater(watchlater, item);

      handleAddToWatchlater(item, isItemInWatchlater, setWatchlaterLoad);
    } else {
      Toast("Save to watchlater, after signing in. Please Sign In");
    }
  };

  const handleAddToWatchlater = async (
    item,
    isItemInWatchlater,
    setWatchlaterLoad
  ) => {
    setWatchlaterLoad((prev) => !prev);
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
            payload: { _id: item._id, video: item },
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

  const handleRemoveWatchlaterItem = async (item, setWatchlaterLoad) => {
    setWatchlaterLoad((prev) => !prev);
    try {
      const response = await axios.delete(
        `${url}watchlater/userId/${item._id}`
      );
      if (response.status === 200) {
        dataDispatch({ type: "REMOVE_ITEM_FROM_WATCHLATER", payload: item });
        Toast("Removed From Watchlater");
        toggleModalVisibility();
      }
    } catch (err) {
      console.log(err);
    }
    setWatchlaterLoad((prev) => !prev);
  };

  return {
    addToWatchlater,
    handleAddToWatchlater,
    handleRemoveWatchlaterItem,
  };
};
