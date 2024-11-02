import { useSelector } from "react-redux";
import { getToken, getUserInfo } from "@/features/user/userSlice.js";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const token = useSelector(getToken);
  const user = useSelector(getUserInfo);
  const location = useLocation();


  if (!token && !user) return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ redirect: location.pathname, error: "Unauthorized" }} />
  );

  return <Outlet />;
};

export default AuthRequired;