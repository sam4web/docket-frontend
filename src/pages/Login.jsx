import { Emoji, Header, AuthForm } from "@/components";
import { Link } from "react-router-dom";

const Login = () => {
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
            <p className="text-2xl text-responsive font-medium">
              <span className="text-lg">Hi, Welcome back </span>
              <Emoji label={"wave"} symbol={"👋"} />
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
