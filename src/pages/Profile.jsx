import { Emoji, Header, Sidebar } from "@/components";
import authStore from "@/stores/authStore";
import formatDate from "@/utils/formatDate";
import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Profile = () => {
  const { token, logout } = authStore();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`${SERVER_URL}/api/profile`, {
        headers: { "x-auth-token": token },
      });
      setUser(response.data);
    };
    fetchProfile();
  }, [token]);
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header iconsOnly />

        <section className="max-w-lg mx-auto space-y-6 pt-16 sm:pt-20 text-responsive ">
          <h1 className="text-4xl font-semibold">
            Hello User <Emoji label={"wave"} symbol={"👋"} />
          </h1>
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
              <p className="text-red-600 dark:text-red-500 cursor-pointer">
                Delete
              </p>
            </div>
          </div>

          <button onClick={logout} className="btn text-base">
            Logout
          </button>
        </section>
      </div>
    </>
  );
};

export default Profile;
