import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { validatePassword } from "@/utils/validateCredentials.js";

const AuthPassForm = ({ handleSubmit }) => {
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setError(null);
  }, [password]);


  const submitForm = (e) => {
    e.preventDefault();
    const passValid = validatePassword(password || "");
    if (!passValid.isValid) {
      setError(passValid.message);
      return;
    }

    handleSubmit(password);
  };


  return (
    <form className="space-y-4" onSubmit={submitForm} noValidate>
      <div className="input-container">
        <label htmlFor="password">Enter your password: </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />

          {(password || "").length > 0 && (
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
                  <span
                    className="text-2xl text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 ">
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
            </button>
          )}
        </div>
        <p className="error-message">{error}</p>

      </div>

      <button className="btn text-lg px-5" type="submit" disabled={!password.length}>
        Submit
      </button>
    </form>
  );
};

export default AuthPassForm;