import { useParams } from "react-router-dom";

import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./Video.module.css";
import ReactPlayer from "react-player/lazy";
// import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { useVideoDetails } from "../../hooks/useVideoDetails";
import url from "../../config";

const Video = () => {
  const { videoID } = useParams();
  const video = useVideoDetails("get", `${url}videos/${videoID}`);

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

  return (
    <DefaultWithoutSearch>
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
              <div className={styles.videoActionBarItem}>
                <AiOutlineLike style={{ fontSize: "1.5rem" }} />
                <div>Like</div>
              </div>

              <div className={styles.videoActionBarItem}>
                <RiPlayListAddFill style={{ fontSize: "1.5rem" }} />
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
