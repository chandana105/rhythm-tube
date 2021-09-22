import Main from "./Main";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import { useVideo } from "../../Contexts/VideoProvider";
import { useVideoData } from "../../hooks/useVideoData";
import url from "../../config";
import { useParams } from "react-router-dom";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";
import { useModal } from "../../Contexts/ModalProvider";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import Modal from "../Modal/Modal";
import PlaylistModal from '../PlaylistModal/PlaylistModal'

const Home = () => {
  const { categoryId } = useParams();
  const { videos, searchBy } = useVideo();
  const { showModal, toggleModalVisibility } = useModal();
  const { showPlaylistModal, togglePlaylistModalVisibility } = usePlaylistModal();


  useVideoData("get", `${url}videos`);

  const categoryDetails = useCategoryDetails(
    "get",
    `${url}categories/${categoryId}`
  );

  const getSearchedData = (videoData, { searchBy }) => {
    return videoData.filter(({ title }) =>
      title.toLowerCase().includes(searchBy.toLowerCase())
    );
  };

  const getVideos = (categoryId) => {
    if (categoryId !== undefined) {
      return categoryDetails;
    }
    return videos;
  };

  const videoData = getVideos(categoryId);

  const filteredData = getSearchedData(videoData, { searchBy });

  return (
    <div className="container" id="home">
      {showModal && <Modal handleClose={toggleModalVisibility} />}
      {showPlaylistModal && <PlaylistModal handleClose={togglePlaylistModalVisibility} />}
      <Nav search={true} />
      <Sidebar />
      <Main filteredData={filteredData} />
    </div>
  );
};

export default Home;
