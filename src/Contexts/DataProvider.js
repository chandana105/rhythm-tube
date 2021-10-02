import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { generalReducer } from "../Reducers/generalReducer";
import url from "../config";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [{ likedVideos, watchlater, playlists }, dataDispatch] = useReducer(
    generalReducer,
    {
      likedVideos: [],
      watchlater: [],
      playlists : []
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

  const getAllPlaylists =  async () => {
    try {
      const response = await axios.get(`${url}playlists/userId`);
      if (response.status === 200) {
        dataDispatch({
          type: "FETCH_ALL_PLAYLISTS",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log("Error while getting all the playlists of the user", err);
    }
  }

  return (
    <DataContext.Provider
      value={{
        likedVideos,
        watchlater,
        playlists,
        getLikedVideosData,
        getWatchlaterData,
        getAllPlaylists,
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
