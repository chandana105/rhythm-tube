import { Link } from "react-router-dom";
const VideoCard = () => {
  return (
    <>
      <div className="card" id="card">
        <div className="thumbnail">
          {/* <Link to={`/products/${id}`}> */}
          <Link to="/video">
            <img
              src="https://i.ytimg.com/vi/vUCM_0evdQY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCAMv_ccMZozPUQOzs_d7QUrjsEfQ"
              alt="card"
            />
            {/* </Link> */}
          </Link>
        </div>
        <div className="text">
          <div className="video-avatar">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLSZoSQN4LlZb2YGnXsVGuErzR8oI2fh26puaBcs6A=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="video-description">
            <p className="title">
              Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka,
              Aishwarya|Arijit|Pritam
            </p>
            <p class="grey-text">SonyMusicIndiaVEVO</p>
            <p class="grey-text">299M views</p>
            <p class="grey-text">March 3, 2017</p>
          </div>
          <div className="Video-card-option-menu">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
