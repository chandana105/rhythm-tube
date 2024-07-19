import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ type, color, height }) => {
  return <Loader type={type} color={color} height={height} width={60} />;
};

export default Spinner;
