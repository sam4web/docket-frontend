import { IoArrowBack, IoPersonOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle.jsx";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "@/components/header/SearchBox.jsx";

const Header = ({ iconsOnly }) => {
  const navigate = useNavigate();

  return (
    <header>
      <section className={`flex items-center gap-1`}>
        <div className="flex-1">
          {!iconsOnly ? (
            <SearchBox />
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
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;