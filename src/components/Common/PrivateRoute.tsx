import { Navigate, Outlet } from "react-router-dom";

export interface PirvateRouteProps {}

export function PirvateRoute(props: PirvateRouteProps) {
  // Check if user is logged in
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
