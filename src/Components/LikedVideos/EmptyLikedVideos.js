import watchLater from "../../assets/images/watchLater.svg";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

const EmptyLikedVideos = () => {
  return (
    <div className="container" id="empty-page">
      <Nav search={false} />
      <Sidebar />
      <div className="content">
        <main>
          <div className="empty-container-card">
            <h3>NO VIDEOS FOUND</h3>
            <img src={watchLater} alt="cart" />
            <button className="btn btn-primary">
              <Link to="/">BROWSE VIDEOS</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmptyLikedVideos;
