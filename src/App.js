import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home/Home";
import Video from "./Components/Video/Video";
import WatchLater from "./Components/WatchLater/WatchLater";
import EmptyWatchLater from "./Components/WatchLater/EmptyWatchLater";
import LikedVideos from "./Components/LikedVideos/LikedVideos";
import EmptyLikedVideos from "./Components/LikedVideos/EmptyLikedVideos";
import Playlists from "./Components/Playlists/Playlists";
import EmptyPlaylists from "./Components/Playlists/EmptyPlaylists";
import PlaylistVideos from "./Components/PlaylistVideos/PlaylistVideos";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import NotFound from "./Components/NotFound";
import Profile from "./Auth/Profile";
import { useAuth } from "./Contexts/AuthProvider";
import { useEffect } from "react";
import { setupAuthHeaderForServiceCalls } from "./Utils/utils";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";
import { useData } from "./Contexts/DataProvider";

function App() {
  const { token, getUserData } = useAuth();
  const {
    watchlater,
    likedVideos,
    playlists,
    getLikedVideosData,
    getWatchlaterData,
    getAllPlaylists,
  } = useData();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(token);
    if (token) {
      getUserData();
      getLikedVideosData();
      getWatchlaterData();
      getAllPlaylists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryId" element={<Home />} />
        <Route path="/video/:videoID" element={<Video />} />
        {watchlater.length === 0 ? (
          <PrivateRoute path="/watchlater" element={<EmptyWatchLater />} />
        ) : (
          <PrivateRoute path="/watchlater" element={<WatchLater />} />
        )}
        {likedVideos.length === 0 ? (
          <PrivateRoute path="/likedvideos" element={<EmptyLikedVideos />} />
        ) : (
          <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
        )}
        {playlists.length === 0 ? (
          <PrivateRoute path="/playlists" element={<EmptyPlaylists />} />
        ) : (
          <PrivateRoute path="/playlists" element={<Playlists />} />
        )}
        {playlists.length === 0 ? (
          <PrivateRoute
            path="/playlists/:playlistId"
            element={<EmptyPlaylists />}
          />
        ) : (
          <Route path="/playlists/:playlistId" element={<PlaylistVideos />} />
        )}
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
