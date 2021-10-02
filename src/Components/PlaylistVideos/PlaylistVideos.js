import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./PlaylistVideos.module.css";
import VideoList from "../VideoList/VideoList";
import { useParams } from "react-router-dom";
import { useData } from "../../Contexts/DataProvider";
import { generateThumbnail } from "../../Utils/utils";
import { useModal } from "../../Contexts/ModalProvider";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import Modal from "../Modal/Modal";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import { usePlaylists } from "../../hooks/usePlaylists";

// params
const PlaylistVideos = () => {
  const { playlists } = useData();
  const { playlistId } = useParams();
  const { removeFromPlaylist } = usePlaylists();
  const playlist = playlists.find((playlist) => playlist._id === playlistId);
  const playlistItemId = playlist.playlistVideos.map(
    ({ video }) => video.videoId
  )[0];
  const playlistItemTitle = playlist.playlistVideos.map(
    ({ video }) => video.title
  )[0];
  const { showModal, toggleModalVisibility, setModalData } = useModal();
  const { showPlaylistModal, togglePlaylistModalVisibility } =
    usePlaylistModal();

  const onOptionMenuClick = (item) => {
    setModalData(item);
    toggleModalVisibility();
  };

  const handleRemovePlaylistVideo = async (videoId ,setPlaylistRemoveLoad) => {
    await removeFromPlaylist(playlistId, videoId, setPlaylistRemoveLoad);
    toggleModalVisibility();
  };
  return (
    <DefaultWithoutSearch>
      {showModal && (
        <Modal
          handleClose={toggleModalVisibility}
          playlistVideoRemove={true}
          otherPageWatchlater={true}
          handleRemovePlaylistVideo={handleRemovePlaylistVideo}
        />
      )}
      {showPlaylistModal && (
        <PlaylistModal handleClose={togglePlaylistModalVisibility} />
      )}
      <div className="content" id="watchLater">
        <main>
          <div className={styles.playListBar}>
            <div className="card" id="card">
              <div className="thumbnail">
                <img
                  src={generateThumbnail(playlistItemId, playlistItemTitle)}
                  alt="card"
                />
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {playlist.name}
              </div>
              <div className="grey-text">
                {" "}
                {playlist.playlistVideos.length}{" "}
                {playlist.playlistVideos.length === 1 ? "video" : "videos"}
              </div>
            </div>
          </div>
          <div className={styles.videoItems}>
            {playlist.playlistVideos.map((item) => (
              <VideoList
                item={item}
                key={item._id}
                onOptionMenuClick={onOptionMenuClick}
              />
            ))}
          </div>
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default PlaylistVideos;
