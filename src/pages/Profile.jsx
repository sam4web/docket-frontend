import formatDate from "@/utils/formatDate";
import Sidebar from "@/components/Sidebar.jsx";
import Header from "@/components/Header.jsx";
import Emoji from "@/components/Emoji.jsx";


const Profile = () => {

  // demo user data
  const user = {
    "username": "John",
    "email": "john@example.com",
    "createdAt": "2024-10-28T09:53:08.905Z",
    "updatedAt": "2024-10-28T10:32:52.358Z",
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header iconsOnly />
        <section className="max-w-lg mx-auto space-y-6 pt-16 sm:pt-20 text-responsive text-center md:text-left text-lg">
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
              <p className="text-red-600 dark:text-red-500 cursor-pointer">
                Delete
              </p>
            </div>
          </div>

          <button onClick={() => console.log("Logged out")} className="btn text-lg px-5 py-2.5">
            Logout
          </button>
        </section>
      </div>
    </>
  );
};

export default Profile;
