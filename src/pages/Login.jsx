import { Emoji, Header, AuthForm } from "@/components";
import { Link } from "react-router-dom";

const Login = () => {
  // const error = { message: "Failed to login, try again" };
  const error = null;

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-10 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Login</h1>
            <p className="text-lg">
              {error ? (
                <span className="error-text">{error.message}</span>
              ) : (
                <span className="text-responsive font-medium">
                  Hi, Welcome back
                </span>
              )}{" "}
              <span className="text-xl">
                {error ? (
                  <Emoji label={"warning"} symbol={"⚠️"} />
                ) : (
                  <Emoji label={"wave"} symbol={"👋"} />
                )}
              </span>
            </p>
          </div>

          <AuthForm handleSubmit={handleSubmit} />

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
