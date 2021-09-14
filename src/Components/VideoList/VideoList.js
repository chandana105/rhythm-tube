import styles from "./VideoList.module.css";

const VideoList = () => {
  return (
    <>
      <div className={`card-horizontal ${styles.videoContainer}`}>
        <div className={`thumbnail ${styles.image}`}>
          <img
            src="https://i.ytimg.com/vi/vUCM_0evdQY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCAMv_ccMZozPUQOzs_d7QUrjsEfQ"
            alt="horizontal-img"
          />
        </div>
        <div className={styles.videoText}>
          <div className={styles.videoTitle}>
            Ae Dil Hai Mushkil Title Track Full Video
          </div>
          <div className="grey-text">description</div>
        </div>
        <div className={styles.optionMenuContainer}>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      
    </>
  );
};

export default VideoList;
