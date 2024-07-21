import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../Contexts/VideoProvider";

export const useCategory = (requestType, url) => {
  const { categories, videoDispatch } = useVideo();

  const getCategoryData = async () => {
    if (categories.length === 0) {
      videoDispatch({
        type: "SHOW_LOADER",
      });
      try {
        const { data } = await axios({
          method: requestType,
          url,
        });
        videoDispatch({
          type: "FETCH_ALL_CATEGORIES",
          payload: data.categories,
        });
      } catch (err) {
        console.log(err , 'here');
        videoDispatch({
          type: "FETCH_ALL_CATEGORIES",
          payload: [],
        });
      }
      videoDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  useEffect(() => {
    getCategoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
