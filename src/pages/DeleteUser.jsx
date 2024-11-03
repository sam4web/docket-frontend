import usePageTitle from "@/hooks/usePageTitle.js";
import Header from "@/components/header/Header.jsx";
import ErrorText from "@/components/common/ErrorText.jsx";
import { useState } from "react";
import AuthPassForm from "@/components/auth/AuthPassForm.jsx";
import { useDispatch } from "react-redux";
import { sendDeleteUserRequest } from "@/features/user/userThunks.js";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
  usePageTitle("Delete Account Confirmation | Docket");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const deleteUser = async (password) => {
    try {
      await dispatch(sendDeleteUserRequest(password)).unwrap();
      navigate("/login");
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
            <h1 className="text-4xl text-responsive font-semibold">Confirm Account Deletion</h1>
            {error ?
              <ErrorText error={error} /> :
              <p className="text-lg error-message">
                Are you sure you want to delete your account?
                <br />
                This action is permanent, and all your notes will be lost.
              </p>
            }
          </div>

          <AuthPassForm handleSubmit={deleteUser} />
        </section>
      </div>
    </>
  );
};

export default DeleteUser;