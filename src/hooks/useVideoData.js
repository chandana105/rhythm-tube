import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../Contexts/VideoProvider";

export const useVideoData = (requestType, url) => {
  const { videos, videoDispatch } = useVideo();

  const getVideoData = async () => {
    if (videos.length === 0) {
      videoDispatch({
        type: "SHOW_LOADER",
      });
      try {
        const { data } = await axios({
          method: requestType,
          url,
        });
        videoDispatch({
          type: "FETCH_ALL_VIDEOS",
          payload: data.videos,
        });
      } catch (err) {
        console.log(err);
        videoDispatch({
          type: "FETCH_ALL_VIDEOS",
          payload: [],
        });
      }
      videoDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  useEffect(() => {
    getVideoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
