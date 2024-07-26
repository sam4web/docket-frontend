import { Header, Sidebar } from "@/components";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header />
        <h1 className="text-4xl dark:text-light text-dark font-medium">
          Notes
        </h1>
        <section></section>
      </div>
    </>
  );
};

export default Home;
