import Header from "@/components/Header.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import usePageTitle from "@/hooks/usePageTitle.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  usePageTitle("Docket | Your Notes, Organized");
  const navigate = useNavigate();

  return <>
    <Sidebar />
    <div className="main-container">
      <Header />
      <section className="text-center space-y-7 md:space-y-10 pt-20">
        <h2 className="text-3xl md:text-4xl font-medium text-responsive">
          No Notes Found
        </h2>
        <button
          className="btn text-lg px-5 py-2.5"
          onClick={() => navigate("/notes/create")}>
          Create Note
        </button>
      </section>
    </div>
  </>;
};

export default Home;