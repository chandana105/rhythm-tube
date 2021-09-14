import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./Video.module.css";
import ReactPlayer from "react-player/lazy";
// import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

import { RiPlayListAddFill } from "react-icons/ri";

const Video = () => {
  return (
    <DefaultWithoutSearch>
      <div className="content" id="video">
        <main>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=6FURuLYrR_Q"
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
            <div className={styles.videoHashTitle}>#ADHMMusicVideo</div>
            <div className={styles.videoTitle}>
              Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka,
              Aishwarya|Arijit|Pritam
            </div>
            <div>299,653,006 views, Mar 3, 2017</div>
            <div className={styles.videoActionBar}>
              <div className={styles.videoActionBarItem}>
                <AiOutlineLike style={{ fontSize: "1.5rem" }} />
                <div >Like</div>
              </div>

              <div className={styles.videoActionBarItem}>
                <RiPlayListAddFill style={{ fontSize: "1.5rem" }} />
                <div>Save</div>
              </div>
            </div>
            <div className={styles.channelDescription}>
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLSZoSQN4LlZb2YGnXsVGuErzR8oI2fh26puaBcs6A=s68-c-k-c0x00ffffff-no-rj"
                alt="channel avatar"
              />
              <div style={{ marginLeft: "1rem" }}>
                <div>SonyMusicIndiaVEVO</div>
                <div style={{ fontSize: "0.9rem" }}>37.5M subcribers</div>
              </div>
            </div>
            <div className={styles.description}>
              Enjoy the full song video of one of the most loved tracks of the
              year, here's presenting the Ae Dil Hai Mushkil Full Song Music
              Video.
            </div>
          </div>
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default Video;
