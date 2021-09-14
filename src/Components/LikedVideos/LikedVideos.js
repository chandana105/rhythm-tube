import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from './LikedVideos.module.css'
import VideoList from "../VideoList/VideoList";
const LikedVideos = () => {
  return <DefaultWithoutSearch><div className="content" id="watchLater">
  <main>
    <div className={styles.playListBar}>
      <div className="card" id="card">
        <div className="thumbnail">
          <img
            src="https://i.ytimg.com/vi/vUCM_0evdQY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCAMv_ccMZozPUQOzs_d7QUrjsEfQ"
            alt="card"
          />
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Liked Videos
        </div>
        <div className="grey-text">1 video</div>
      </div>
    </div>
    <div className={styles.videoItems}>
    <VideoList />

    </div>
  </main>
</div>
</DefaultWithoutSearch>;
};

export default LikedVideos;
