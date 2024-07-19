import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import url from "../config";
import { Toast } from "../Components/Toast";
import { useVideo } from "../Contexts/VideoProvider";
import { setupAuthHeaderForServiceCalls } from "../Utils/utils";

const AuthContext = createContext();

function setupAuthExceptionHandler(logoutHandler, navigate) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logoutHandler();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage?.getItem("token"))
  );
  const [signupEmailErr, setSignupEmailErr] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const { videoDispatch } = useVideo();
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const {
        status,
        data: { user },
      } = await axios.get(`${url}user/userId`);
      if (status === 200) {
        setUser(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = (token) => {
    setupAuthHeaderForServiceCalls(token);
    setToken(token);
    localStorage?.setItem("token", JSON.stringify(token));
    Toast("Login Successfull!");
  };

  const logoutHandler = () => {
    localStorage?.removeItem("token");
    setToken(null);
    setupAuthHeaderForServiceCalls(null);
    navigate("/");
    Toast("Logout Successfull!");
  };

  useEffect(() => {
    token && loginUser(token);
    setupAuthExceptionHandler(logoutHandler, navigate);
  }, []);

  const signupHandler = async (inputData) => {
    try {
      videoDispatch({
        type: "SHOW_LOADER",
      });
      const response = await axios.post(`${url}auth/sign-up `, {
        username: inputData.username,
        email: inputData.email,
        password: inputData.password,
      });
      if (response.status === 200) {
        Toast("Signup Successfull, Please Login!");
        navigate("/login");
      }
    } catch (err) {
      if (err.response.status === 409) {
        setSignupEmailErr(err.response.data.message);
      } else {
        setError(err.response.data.message);
      }
      console.log("err", err.response.data.message);
    } finally {
      videoDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  const loginHandler = async (inputData) => {
    try {
      videoDispatch({
        type: "SHOW_LOADER",
      });
      const response = await axios.post(`${url}auth/login `, {
        email: inputData.email,
        password: inputData.password,
      });
      const { status, data } = response;
      const { token } = data;
      if (status === 200) {
        loginUser(token);
      }
    } catch (err) {
      setError(err.response.data.message);
      console.log("err", err.response.data.message);
    } finally {
      videoDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signupEmailErr,
        error,
        user,
        signupHandler,
        loginHandler,
        logoutHandler,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
