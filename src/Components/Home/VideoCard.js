import { Link } from "react-router-dom";
import { generateThumbnail, trimStr } from "../../Utils/utils";

const VideoCard = ({ item }) => {
  const {
    _id,
    videoId,
    title,
    viewsCount,
    uploadDate,
    channelName,
    channelLogo,
    duration,
  } = item;

  return (
    <>
      <div className="card" id="card">
        <div className="thumbnail">
          <Link to={`/video/${_id}`}>
            <img src={generateThumbnail(videoId, title)} alt="card" />
          </Link>
          <div className="video-duration">{duration}</div>
        </div>
        <div className="text">
          <div className="video-avatar">
            <img src={channelLogo} alt="channelLogo" />
          </div>
          <div className="video-description">
            <p className="title">{trimStr(title)}</p>
            <p className="grey-text">{channelName}</p>
            <p className="grey-text">{viewsCount} views</p>
            <p className="grey-text">{uploadDate}</p>
          </div>
          <div className="Video-card-option-menu">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
