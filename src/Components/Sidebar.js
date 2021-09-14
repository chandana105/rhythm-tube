import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="side-bar" id="side-bar">
      <ul>
        <li>
          <Link to="/">
            <button className="btn btn-primary btn-icon">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/watchlater">
            <button className="btn btn-primary btn-icon">
              <i class="fas fa-clock"></i>
              <span>Watch Later</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/likedvideos">
            <button className="btn btn-primary btn-icon">
              <i class="fas fa-thumbs-up"></i>
              <span>Liked Videos</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/playlists">
            <button className="btn btn-primary btn-icon">
              <i class="fas fa-play-circle"></i>
              <span>Playlists</span>
            </button>
          </Link>
        </li>
        <li>
          <button className="btn btn-primary btn-icon">
            <i class="fas fa-music"></i>
            <span>Library</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
