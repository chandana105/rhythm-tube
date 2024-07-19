import { useParams } from "react-router-dom";
import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./Video.module.css";
import ReactPlayer from "react-player/lazy";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { useVideoDetails } from "../../hooks/useVideoDetails";
import url from "../../config";
import { useModal } from "../../Contexts/ModalProvider";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import Modal from "../Modal/Modal";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import { itemInLikedVideos } from "../../Utils/utils";
import { useData } from "../../Contexts/DataProvider";
import { useLikedVideos } from "../../hooks/useLikedVideos";
import { useState } from "react";
import Spinner from "../Spinner";

const Video = () => {
  const { videoID } = useParams();
  const video = useVideoDetails("get", `${url}videos/${videoID}`);
  const { likedVideos } = useData();
  const { addToLikedVideos, handleRemoveLikedVideosItem } = useLikedVideos();
  const { showModal, toggleModalVisibility, setModalData } = useModal();
  const { showPlaylistModal, togglePlaylistModalVisibility } =
    usePlaylistModal();
  const [likedVideosLoad, setLikedVideosLoad] = useState(false);
  const {
    videoId,
    hashTag,
    title,
    viewsCount,
    uploadDate,
    channelName,
    channelLogo,
    subscriberCount,
    description,
  } = video;

  const isInLikedVideos = itemInLikedVideos(likedVideos, video);

  const onOptionMenuClick = (item) => {
    setModalData(item);
    toggleModalVisibility();
  };

  const toggleLike = (isInLikedVideos) => {
    if (!isInLikedVideos) {
      return addToLikedVideos(video, setLikedVideosLoad);
    }
    return handleRemoveLikedVideosItem(video, setLikedVideosLoad);
  };

  return (
    <DefaultWithoutSearch>
      {showModal && <Modal handleClose={toggleModalVisibility} />}
      {showPlaylistModal && (
        <PlaylistModal handleClose={togglePlaylistModalVisibility} />
      )}
      <div className="content" id="video">
        <main>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
              className={styles.reactPlayer}
              playing={true}
              controls={true}
              pip={true}
              stopOnUnmount={false}
            />
          </div>
          <div className={styles.videoDetails}>
            <div className={styles.videoHashTitle}>{hashTag}</div>
            <div className={styles.videoTitle}>{title}</div>
            <div>
              {viewsCount} views, {uploadDate}
            </div>
            <div className={styles.videoActionBar}>
              <div
                className={styles.videoActionBarItem}
                onClick={() => toggleLike(isInLikedVideos)}
              >
                {isInLikedVideos ? (
                  likedVideosLoad ? (
                    <Spinner type="Oval" color="#a78bfa" height={20} />
                  ) : (
                    <AiFillLike className="icons-large" style={{color : "#bb86fc"}} />
                  )
                ) : likedVideosLoad ? (
                  <Spinner type="Oval" color="#a78bfa" height={20} />
                ) : (
                  <AiOutlineLike className="icons-large" />
                )}

                <div>Like</div>
              </div>

              <div
                className={styles.videoActionBarItem}
                onClick={() => onOptionMenuClick(video)}
              >
                <RiPlayListAddFill className="icons-large" />
                <div>Save</div>
              </div>
            </div>
            <div className={styles.channelDescription}>
              <img src={channelLogo} alt="channel avatar" />
              <div style={{ marginLeft: "1rem" }}>
                <div>{channelName}</div>
                <div style={{ fontSize: "0.9rem" }}>
                  {subscriberCount} subcribers
                </div>
              </div>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default Video;
