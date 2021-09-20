import VideoCard from "./VideoCard";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import Spinner from "../Spinner";
import { useVideo } from "../../Contexts/VideoProvider";

const Main = ({ filteredData }) => {
  const { showLoader } = useVideo();
  return (
    <div className="content">
      <main>
        <CategoriesBar />
        <div className="products">
          <div className="loader">
            {showLoader && <Spinner type="Audio" color="#c4b5fd" height={60} />}
          </div>
          {filteredData.map((item) => (
            <VideoCard item={item} key={item._id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;
