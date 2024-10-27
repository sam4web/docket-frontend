import Header from "@/components/Header.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import usePageTitle from "@/hooks/usePageTitle.js";

const Home = () => {
  usePageTitle("Docket | Your Notes, Organized");

  return <>
    <Sidebar />
    <div className="main-container">
      <Header />
      <section className="text-center space-y-5 pt-20">
        <h2 className="text-2xl font-medium text-responsive">
          No Notes Found
        </h2>
        <button className="btn text-lg px-5 py-2.5">
          Create Note
        </button>
      </section>
    </div>
  </>;
};

export default Home;