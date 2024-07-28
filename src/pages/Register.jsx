import { Emoji, Header, AuthForm } from "@/components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-md mx-auto space-y-5 sm:space-y-10 pt-16 sm:pt-20">
          <div className="space-y-3">
            <h1 className="text-4xl text-responsive font-semibold">Sign Up</h1>
            <p className="text-xl text-responsive font-medium">
              <span className="text-lg">Create your account </span>
              <Emoji label={"star"} symbol={"✨"} />
            </p>
          </div>

          <AuthForm />

          <p className="text-responsive font-medium text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="font-semibold underline">
              Log in
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default Register;
