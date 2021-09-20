import { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../Contexts/VideoProvider";

export const useVideoDetails = (requestType, url) => {
  const { videoDispatch } = useVideo();
  const [videoDetails, setVideoDetails] = useState([]);

  const getVideoDetails = async () => {
    videoDispatch({
      type: "SHOW_LOADER",
    });
    try {
      const { data } = await axios({
        method: requestType,
        url,
      });
      setVideoDetails(data.video);
    } catch (err) {
      console.log(err);
      setVideoDetails([]);
    }
    videoDispatch({
      type: "SHOW_LOADER",
    });
  };

  useEffect(() => {
    videoDetails.length === 0 && getVideoDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return videoDetails;
};
