import authStore from "@/stores/authStore";
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const { token } = authStore();
  if (!token) return <Navigate to="/login" replace={true} />;
  return children;
};

export default AuthRequired;
