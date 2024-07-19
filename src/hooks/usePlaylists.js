import axios from "axios";
import { useData } from "../Contexts/DataProvider";
import { Toast } from "../Components/Toast";
import url from "../config";

export const usePlaylists = () => {
  const { dataDispatch } = useData();

  const createNewPlaylist = async (
    playlistName,
    setPlaylistName,
    item,
    setCreatePlaylistLoad
  ) => {
    setCreatePlaylistLoad((prev) => !prev);
    try {
      const response = await axios.post(`${url}playlists/userId`, {
        name: playlistName,
        playlistVideos: [
          {
            video: item._id,
          },
        ],
      });
      if (response.status === 200) {
        dataDispatch({
          type: "CREATE_NEW_PLAYLIST",
          payload: response.data.getNewPlaylist,
        });
        setPlaylistName("");
        Toast(`${playlistName} playlist created!`);
      }
    } catch (err) {
      console.log(err);
    }
    setCreatePlaylistLoad((prev) => !prev);
  };

  const addToPlaylist = async (playlistId, videoId, setPlaylistAddLoad) => {
    setPlaylistAddLoad(playlistId);
    try {
      const response = await axios.post(
        `${url}playlists/userId/${playlistId}`,
        {
          playlistVideos: [
            {
              video: videoId,
            },
          ],
        }
      );
      if (response.status === 200) {
        dataDispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: response.data.getUpdatedPlaylist,
        });
        Toast(
          `${response.data.getUpdatedPlaylist.name} playlist updated! Video Added to it.`
        );
      }
    } catch (err) {
      console.log(err);
    }
    setPlaylistAddLoad('');
  };

  const removeFromPlaylist = async (
    playlistId,
    videoId,
    setPlaylistRemoveLoad
  ) => {
    setPlaylistRemoveLoad((prev) => !prev);
    try {
      const response = await axios.delete(
        `${url}playlists/userId/${playlistId}/${videoId}`
      );
      if (response.status === 200) {
        dataDispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: response.data,
        });
        Toast("Video removed from playlist!");
      }
    } catch (err) {
      console.log(err);
    }
    setPlaylistRemoveLoad((prev) => !prev);
  };

  const removePlaylist = async (playlistId, setPlaylistLoad) => {
    setPlaylistLoad(playlistId);
    try {
      const response = await axios.delete(
        `${url}playlists/userId/${playlistId}`
      );
      if (response.status === 200) {
        dataDispatch({
          type: "REMOVE_PLAYLIST",
          payload: response.data.deletedPlaylist,
        });
        Toast("Playlist Removed Successfully!");
      }
    } catch (err) {
      console.log(err);
    }
    setPlaylistLoad('');
  };

  return {
    createNewPlaylist,
    addToPlaylist,
    removeFromPlaylist,
    removePlaylist,
  };
};
