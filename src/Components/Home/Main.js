import VideoCard from "./VideoCard";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
const Main = () => {
  return (
    <div className="content">
      <main>
        {/* categoreis */}
        <CategoriesBar />
        <div className="products">
          <VideoCard />
        </div>
      </main>
    </div>
  );
};

export default Main;
