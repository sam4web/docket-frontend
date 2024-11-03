import formatDate from "@/utils/formatDate";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import Header from "@/components/header/Header.jsx";
import Emoji from "@/components/common/Emoji.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "@/features/user/userSlice.js";
import usePageTitle from "@/hooks/usePageTitle.js";
import { sendLogoutRequest } from "@/features/user/userThunks.js";
import { Link, useNavigate } from "react-router-dom";
import { clearAllNotes } from "@/features/note/noteSlice.js";
import ErrorText from "@/components/common/ErrorText.jsx";
import { useState } from "react";


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserInfo);
  const [error, setError] = useState(null);
  usePageTitle(`Hello, ${user?.username} | Docket`);

  const logoutUser = async () => {
    try {
      await dispatch(sendLogoutRequest()).unwrap();
      dispatch(clearAllNotes());
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header iconsOnly />

        <section className="max-w-lg mx-auto space-y-6 pt-16 sm:pt-20 text-responsive text-center md:text-left text-lg">
          {error && <ErrorText error={error} />}
          <h2 className="text-3xl md:text-4xl font-medium text-responsive text-left">
            Hello {user.username} <Emoji label={"wave"} symbol={"👋"} />
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 px-5 py-3.5 rounded-md space-y-2.5 shadow-sm">
            <div className="flex-between">
              <p className="font-medium">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="flex-between">
              <p className="font-medium">Created At</p>
              <p>{formatDate(user.createdAt)}</p>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 px-5 py-3.5 rounded-md space-y-2.5 shadow-sm">
            <div className="flex-between">
              <p className="font-medium">Password</p>
              <p className="text-blue-600 dark:text-blue-500 cursor-pointer">
                Change Password
              </p>
            </div>
            <div className="flex-between">
              <p className="font-medium">Manage Account</p>
              <Link
                className="text-red-600 dark:text-red-500 cursor-pointer"
                to={"/delete-user"}
              >
                Delete
              </Link>
            </div>
          </div>

          <button onClick={logoutUser} className="btn text-lg px-5 py-2.5">
            Logout
          </button>
        </section>
      </div>
    </>
  );
};

export default Profile;
