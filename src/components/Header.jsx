import { IoSearchOutline, IoPersonOutline, IoArrowBack } from "react-icons/io5";
import ThemeToggler from "./ThemeToggler";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ iconsOnly }) => {
  const navigate = useNavigate();
  return (
    <header>
      <section className={`flex items-center gap-1`}>
        <div className="flex-1">
          {!iconsOnly ? (
            <div className="sm:w-full max-w-xs border-2 shadow-sm px-3 py-2 rounded-lg flex-between space-x-2 group hover:border-dark dark:border-grey dark:hover:border-grey">
              <label
                htmlFor="search"
                className="dark:text-light dark:group-focus-within:text-light text-zinc-500 group-focus-within:text-dark text-2xl"
              >
                <IoSearchOutline />
              </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="text-responsive outline-none flex-1 placeholder:text-zinc-500 focus:placeholder:text-transparent bg-transparent"
              />
            </div>
          ) : (
            <button className="btn" onClick={() => navigate(-1)}>
              <IoArrowBack />
            </button>
          )}
        </div>

        <div className="space-x-1 sm:space-x-2.5 flex-between">
          <Link className="btn" to={"/profile"}>
            <IoPersonOutline />
          </Link>
          <ThemeToggler />
        </div>
      </section>
    </header>
  );
};

export default Header;
