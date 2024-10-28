import usePageTitle from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import Header from "@/components/Header.jsx";
import Emoji from "@/components/Emoji.jsx";
import AuthForm from "@/components/AuthForm.jsx";

const Login = () => {
  usePageTitle("Welcome Back | Docket");

  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-10 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Login</h1>
            <p className="text-lg">
                <span className="text-responsive font-medium">
                  Hi, Welcome back
                </span>
              <span className="text-xl">
                  <Emoji label={"wave"} symbol={"👋"} />
              </span>
            </p>
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
