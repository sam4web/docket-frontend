import { Header, Sidebar } from "@/components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header />
        {/* <section>
          <h1 className="text-4xl text-responsive font-semibold">
            Notes
          </h1>
          <div></div>
        </section> */}

        <section className="text-center space-y-5 pt-20">
          <h2 className="text-2xl font-medium text-responsive">
            No Notes Found
          </h2>
          <Link to="/create" className="inline-block">
            <button className="btn text-lg px-5 py-2.5">Create Note</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
