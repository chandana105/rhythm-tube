import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Video from "./Components/Video/Video";
import WatchLater from "./Components/WatchLater/WatchLater";
import LikedVideos from "./Components/LikedVideos/LikedVideos";
import Playlists from "./Components/Playlists/Playlists";
import PlaylistVideos from "./Components/PlaylistVideos/PlaylistVideos";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryId" element={<Home />} />
        <Route path="/video/:videoID" element={<Video />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/playlists" element={<Playlists />} />
        {/* /playlists/:playlsitId */}
        <Route path="/playlists/videos" element={<PlaylistVideos />} />
      </Routes>
    </>
  );
}

export default App;
