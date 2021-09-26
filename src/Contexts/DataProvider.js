import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { generalReducer } from "../Reducers/generalReducer";
import url from "../config";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [{ likedVideos, watchlater }, dataDispatch] = useReducer(
    generalReducer,
    {
      likedVideos: [],
      watchlater: [],
    }
  );

  const getLikedVideosData = async () => {
    try {
      const response = await axios.get(`${url}likedVideos/userId`);
      if (response.status === 200) {
        dataDispatch({
          type: "FETCH_LIKEDVIDEOS_DATA",
          payload: response.data.likedVideos.likedVideos,
        });
      }
    } catch (err) {
      console.log("Error while getting the liked videos data", err);
    }
  };

  const getWatchlaterData = async () => {
    try {
      const response = await axios.get(`${url}watchlater/userId`);
      if (response.status === 200) {
        dataDispatch({
          type: "FETCH_WATCHLATER_DATA",
          payload: response.data.watchlaterList.watchlater,
        });
      }
    } catch (err) {
      console.log("Error while getting the watchlater data", err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        likedVideos,
        watchlater,
        getLikedVideosData,
        getWatchlaterData,
        dataDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
