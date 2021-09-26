import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./WatchLater.module.css";
import VideoList from "../VideoList/VideoList";
import { useData } from "../../Contexts/DataProvider";
import { generateThumbnail } from "../../Utils/utils";
import { useModal } from "../../Contexts/ModalProvider";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import Modal from "../Modal/Modal";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

const WatchLater = () => {
  const { watchlater } = useData();
  const { showModal, toggleModalVisibility, setModalData } = useModal();
  const { showPlaylistModal, togglePlaylistModalVisibility } =
    usePlaylistModal();
  const watchlatervideoId = watchlater.map(({ video }) => video.videoId)[0];
  const watchlatervideoTitle = watchlater.map(({ video }) => video.title)[0];

  const onOptionMenuClick = (item) => {
    setModalData(item);
    toggleModalVisibility();
  };
  return (
    <DefaultWithoutSearch>
      {showModal && (
        <Modal handleClose={toggleModalVisibility} watchlater={true} />
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
                  src={generateThumbnail(
                    watchlatervideoId,
                    watchlatervideoTitle
                  )}
                  alt="watchlater_thumbnail"
                />
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Watch Later
              </div>
              <div className="grey-text">
                {" "}
                {watchlater.length}{" "}
                {watchlater.length === 1 ? "video" : "videos"}{" "}
              </div>
            </div>
          </div>
          <div className={styles.videoItems}>
            {watchlater.map((item) => (
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

export default WatchLater;
