import Playlists from "../../assets/images/Playlists.svg";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

const EmptyPlaylists = () => {
  return (
    <div className="container" id="empty-page">
      <Nav search={false} />
      <Sidebar />
      <div className="content">
        <main>
          <div className="empty-container-card">
            <h3>NO PLAYLISTS FOUND</h3>
            <img src={Playlists} alt="cart" />
            <button className="btn btn-primary">
              <Link to="/">ADD VIDEOS</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmptyPlaylists;
