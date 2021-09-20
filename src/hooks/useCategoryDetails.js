import { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../Contexts/VideoProvider";

export const useCategoryDetails = (requestType, url) => {
  const { videoDispatch } = useVideo();
  const [categoryDetails, setCategoryDetails] = useState([]);

  console.log({ url });

  const getCategoryDetails = async () => {
    videoDispatch({
      type: "SHOW_LOADER",
    });
    try {
      const { data } = await axios({
        method: requestType,
        url,
      });
      console.log({ data }, "categories");
      setCategoryDetails(data.category.videos);
    } catch (err) {
      console.log(err);
      setCategoryDetails([]);
    }
    videoDispatch({
      type: "SHOW_LOADER",
    });
  };

  useEffect(() => {
    getCategoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return categoryDetails;
};
