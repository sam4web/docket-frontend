import usePageTitle from "@/hooks/usePageTitle";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/header/Header.jsx";
import Emoji from "@/components/common/Emoji.jsx";
import AuthForm from "@/components/auth/AuthForm.jsx";
import ErrorText from "@/components/common/ErrorText.jsx";

const Login = () => {
  // clear the state when page loads
  window.history.replaceState({}, "");

  const { state } = useLocation();
  usePageTitle(`${state?.errorMessage || "Welcome Back"} | Docket`);


  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-7 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Login</h1>
            {state?.errorMessage ? <ErrorText error={state.errorMessage} /> :
              <p className="text-lg">
                <span className="text-responsive font-medium">
                  Hi, Welcome back
                </span>
                <span className="text-xl">
                  <Emoji label={"wave"} symbol={"👋"} />
              </span>
              </p>
            }
          </div>

          <AuthForm
            handleSubmit={(userData) => console.log(userData)}
          />

          <p className="text-responsive font-medium text-center">
            Not registered yet?{" "}
            <Link to={"/register"} className="font-semibold underline">
              Create an account
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default Login;
