import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./Playlists.module.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Playlists = () => {
  return (
    <DefaultWithoutSearch>
      <div className="content" id="playlists">
        <main>
          <h2>Playlists</h2>
          {/* to make it travese */}
          <div className={`card-horizontal ${styles.videoContainer}`}>
            <div className={`thumbnail ${styles.image}`}>
              <img
                src="https://i.ytimg.com/vi/vUCM_0evdQY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCAMv_ccMZozPUQOzs_d7QUrjsEfQ"
                alt="horizontal-img"
              />
            </div>
            <div className={styles.videoText}>
              <div className={styles.videoTitle}>Favourites</div>
              <div className="grey-text">2 Videos</div>
              <Link to="/playlists/videos">
                <button className="btn btn-primary ">
                  <span>View Full Playlist</span>
                </button>
              </Link>
            </div>
            <div className={styles.optionMenuContainer}>
              <MdDelete />
            </div>
          </div>
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default Playlists;
