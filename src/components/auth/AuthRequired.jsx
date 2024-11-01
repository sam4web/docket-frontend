import { useSelector } from "react-redux";
import { getToken } from "@/features/user/userSlice.js";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const token = useSelector(getToken);
  const location = useLocation();


  if (!token) return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ to: location.pathname, errorMessage: "Unauthorized" }} />
  );

  return <Outlet />;
};

export default AuthRequired;