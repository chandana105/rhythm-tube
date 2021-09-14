import Nav from "./Nav";
import Sidebar from "./Sidebar";

const DefaultWithoutSearch = ({ children }) => {
  return (
    <div className="container">
      <Nav search={false} />
      <Sidebar />
      {children}
    </div>
  );
};

export default DefaultWithoutSearch;
