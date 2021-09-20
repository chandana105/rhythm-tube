import { NavLink } from "react-router-dom";
import music from "../assets/images/music.svg";
import person from "../assets/images/person.png";
import { useVideo } from "../Contexts/VideoProvider";

const Nav = ({ search }) => {
  const activeStyle = {
    color: "#6D28D9 ",
  };
  const { searchBy, videoDispatch } = useVideo();

  return (
    <nav className="header" id="navbar">
      <NavLink to="/" end activeStyle={activeStyle} className="logo">
        <img width="80" src={music} alt="logo" />
        <span>
          <strong> RHYTHM TUBE</strong>
        </span>
      </NavLink>

      {search && (
        <div className="search-container">
          <div className="search-box search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              name=""
              placeholder="Search videos"
              value={searchBy}
              onChange={(e) =>
                videoDispatch({
                  type: "SEARCH_BY_VIDEO_TITLE",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>
      )}

      <span className="avatar avatar-small">
        <img src={person} alt="avatar-sm" />
      </span>
    </nav>
  );
};

export default Nav;
