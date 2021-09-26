import styles from "./VideoList.module.css";
import { generateThumbnail, trimStr } from "../../Utils/utils";
import { Link } from "react-router-dom";

const VideoList = ({ item , onOptionMenuClick }) => {
  const { _id, video } = item;
  const { videoId, title, channelName } = video;
  
  return (
    <>
      <div className={`card-horizontal ${styles.videoContainer}`}>
        <div className={`thumbnail ${styles.image}`}>
          <Link to={`/video/${_id}`}>
            <img src={generateThumbnail(videoId, title)} alt="card" />
          </Link>
        </div>
        <div className={styles.videoText}>
          <div className={styles.videoTitle}>{trimStr(title)}</div>
          <div className="grey-text">{channelName}</div>
        </div>
        <div
          className={styles.optionMenuContainer}
          onClick={() => onOptionMenuClick(item)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </>
  );
};

export default VideoList;
