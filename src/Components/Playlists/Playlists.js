import DefaultWithoutSearch from "../DefaultWithoutSearch";
import styles from "./Playlists.module.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useData } from "../../Contexts/DataProvider";
import { generateThumbnail } from "../../Utils/utils";
import { usePlaylists } from "../../hooks/usePlaylists";
import { useState } from "react";
import Spinner from "../Spinner";

const Playlists = () => {
  const { playlists } = useData();
  const { removePlaylist } = usePlaylists();
  const [playlistLoad, setPlaylistLoad] = useState('');
  return (
    <DefaultWithoutSearch>
      <div className="content" id="playlists">
        <main>
          <h2>Playlists</h2>
          {playlists.map(({ _id, name, playlistVideos }) => {
            const playlistId = playlistVideos.map(
              ({ video }) => video.videoId
            )[0];
            const playlistTitle = playlistVideos.map(
              ({ video }) => video.title
            )[0];
            return (
              <div
                className={`card-horizontal ${styles.videoContainer}`}
                key={_id}
              >
                <div className={`thumbnail ${styles.image}`}>
                  <img
                    src={generateThumbnail(playlistId, playlistTitle)}
                    alt="playlist-thumbnail"
                  />
                </div>
                <div className={styles.videoText}>
                  <div className={styles.videoTitle}>{name}</div>
                  <div className="grey-text">
                    {playlistVideos.length}{" "}
                    {playlistVideos.length === 1 ? "Video" : "Videos"}
                  </div>
                  <Link to={`/playlists/${_id}`}>
                    <button className="btn btn-primary ">
                      <span>View Full Playlist</span>
                    </button>
                  </Link>
                </div>
                <div
                  className={styles.optionMenuContainer}
                  onClick={() => removePlaylist(_id, setPlaylistLoad)}
                >
                  {playlistLoad === _id ? (
                    <Spinner type="Oval" color="#a78bfa" height={30} />
                  ) : (
                    <MdDelete />
                  )}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </DefaultWithoutSearch>
  );
};

export default Playlists;
