import { Emoji, Header, AuthForm } from "@/components";
import authStore from "@/stores/authStore";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const { login, loading, error, token } = authStore();
  if (token && !error) return <Navigate to={"/"} />;

  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-10 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Login</h1>
            <p className="text-lg">
              {error ? (
                <span className="error-text">{error}</span>
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

          <AuthForm
            handleSubmit={(userData) => login(userData)}
            loading={loading}
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
