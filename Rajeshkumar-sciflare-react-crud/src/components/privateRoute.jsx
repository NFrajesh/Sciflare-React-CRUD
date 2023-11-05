import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = (type) => {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || {};
  let currentTime = new Date().getTime();

  if (loginInfo.isLogin && loginInfo.expiresAt > currentTime) {
    return <Outlet />;
  } else {
    localStorage.removeItem("loginInfo");
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
