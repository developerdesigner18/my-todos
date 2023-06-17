import { Navigate, Outlet } from "react-router-dom";
import { USER_TOKEN } from "../utils/constants";

export default function PrivateRoutes() {
  const token = localStorage.getItem(USER_TOKEN);

  return token ? <Outlet /> : <Navigate to="/login" />;
}
