import Main from "./Main";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
const Home = () => {
  return (
    <div className="container" id="home">
      <Nav search={true} />
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
