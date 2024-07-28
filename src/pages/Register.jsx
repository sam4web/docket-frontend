import { Emoji, Header, AuthForm } from "@/components";
import usePageTitle from "@/hooks/usePageTitle";
import authStore from "@/stores/authStore";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  usePageTitle("Create Your Account | Docket");
  const { register, loading, error, token } = authStore();
  if (token && !error) return <Navigate to={"/"} />;

  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-10 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Sign Up</h1>
            <p className="text-lg">
              {error ? (
                <span className="error-text">{error}</span>
              ) : (
                <span className="text-responsive font-medium">
                  Create your account
                </span>
              )}{" "}
              <span className="text-xl">
                {error ? (
                  <Emoji label={"warning"} symbol={"⚠️"} />
                ) : (
                  <Emoji label={"star"} symbol={"✨"} />
                )}
              </span>
            </p>
          </div>

          <AuthForm
            handleSubmit={(userData) => register(userData)}
            loading={loading}
          />

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
