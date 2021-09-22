import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export const PrivateRoute = ({ path, ...props }) => {
  const { token } = useAuth();
  return token ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
