import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../Reducers/videoReducer";

const VideoContext = createContext();

export const useVideo = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [{ videos, searchBy, categories, showLoader }, videoDispatch] =
    useReducer(videoReducer, {
      videos: [],
      categories: [],
      searchBy: "",
      showLoader: false,
    });
  return (
    <VideoContext.Provider
      value={{ categories, videos, searchBy, showLoader, videoDispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
};
