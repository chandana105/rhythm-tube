import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./LikedVideos.module.css";
import VideoList from "../VideoList/VideoList";
import { useData } from "../../Contexts/DataProvider";
import { generateThumbnail } from "../../Utils/utils";
import { useModal } from "../../Contexts/ModalProvider";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import Modal from "../Modal/Modal";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

const LikedVideos = () => {
  const { likedVideos } = useData();
  const { showModal, toggleModalVisibility, setModalData } = useModal();
  const { showPlaylistModal, togglePlaylistModalVisibility } =
    usePlaylistModal();
  const likedVideoId = likedVideos.map(({ video }) => video.videoId)[0];
  const likedVideoTitle = likedVideos.map(({ video }) => video.title)[0];

  const onOptionMenuClick = (item) => {
    setModalData(item);
    toggleModalVisibility();
  };
  return (
    <DefaultWithoutSearch>
      {showModal && (
        <Modal handleClose={toggleModalVisibility} likedVideosRemove={true} otherPageWatchlater={true}/>
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
                  src={generateThumbnail(likedVideoId, likedVideoTitle)}
                  alt="likedVideo_list"
                />
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Liked Videos
              </div>
              <div className="grey-text">
                {likedVideos.length}{" "}
                {likedVideos.length === 1 ? "video" : "videos"}
              </div>
            </div>
          </div>
          <div className={styles.videoItems}>
            {likedVideos.map((item) => (
              <VideoList
                key={item._id}
                item={item}
                onOptionMenuClick={onOptionMenuClick}
              />
            ))}
          </div>
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default LikedVideos;
