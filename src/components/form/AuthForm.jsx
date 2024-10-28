import { validateEmail, validatePassword } from "@/utils/validateCredentials.js";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const AuthForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailValid = validateEmail(formData.email || "");
    const passValid = validatePassword(formData.password || "");
    if (!emailValid.isValid) newErrors.email = emailValid.message;
    if (!passValid.isValid) newErrors.password = passValid.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    handleSubmit(formData);
  };

  const canSubmit = ![formData.email, formData.password].every(Boolean);

  return (
    <form className="space-y-6" onSubmit={submitForm} noValidate>
      <div className="input-container">
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email || ""}
          onChange={handleChange}
          autoComplete="on"
        />
        <p className="error-text">{errors.email}</p>
      </div>

      <div className="input-container">
        <label htmlFor="password">Enter your password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            onChange={handleChange}
            value={formData.password || ""}
            autoComplete="on"
          />

          {(formData.password || "").length > 0 && (
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <span className="text-2xl text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 ">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </button>
          )}
        </div>
        <p className="error-text">{errors.password}</p>
      </div>

      <button className="btn text-lg px-5" type="submit" disabled={canSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
