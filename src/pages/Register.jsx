import usePageTitle from "@/hooks/usePageTitle";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "@/components/header/Header.jsx";
import Emoji from "@/components/common/Emoji.jsx";
import AuthForm from "@/components/auth/AuthForm.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "@/features/user/userSlice.js";
import { sendRegistrationRequest } from "@/features/user/userThunks.js";
import ErrorText from "@/components/common/ErrorText.jsx";

const Register = () => {
  usePageTitle("Create Your Account | Docket");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const token = useSelector(getToken);

  if (token)
    return <Navigate to={"/"} replace={true} />;

  const registerUser = async (credentials) => {
    try {
      await dispatch(sendRegistrationRequest(credentials)).unwrap();
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };


  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-7 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Sign Up</h1>
            {error ? <ErrorText error={error} /> :
              <p className="text-lg">
              <span className="text-responsive font-medium">
                Create your account
              </span>
                <span className="text-xl">
                    <Emoji label={"warning"} symbol={"⚠️"} />
              </span>
              </p>
            }
          </div>

          <AuthForm register handleSubmit={registerUser} />

          <p className="text-responsive font-medium text-center">
            Have an account?{" "}
            <Link to={"/login"} className="font-semibold underline">
              Login to continue
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default Register;

// john@example.com
// P@ssw0rd
