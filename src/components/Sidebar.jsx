import colorStore from "@/stores/colorStore";
import classNames from "classnames";
import { LuPlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { colorVariants, showColorVariants, toggleColorVariants } =
    colorStore();
  const navigate = useNavigate();

  return (
    <section className="px-4 py-4 lg:py-6 border-transparent border-r dark:border-slate-700 border-zinc-300">
      <div className="sm:space-y-9 sm:block flex-between">
        <Link to="/">
          <h2 className="text-xl font-medium text-responsive select-none cursor-pointer">
            docket
          </h2>
        </Link>
        <div className="flex-center flex-row-reverse sm:flex-col gap-5">
          <button
            className={classNames(["sidebar-btn"], {
              "rotate-90": showColorVariants,
            })}
            onClick={toggleColorVariants}
          >
            <LuPlus />
          </button>

          <div
            className={classNames([
              "flex sm:flex-col gap-2.5 sm:gap-4 opacity-0",
              { "opacity-100": showColorVariants },
            ])}
          >
            {showColorVariants
              ? colorVariants.map((item) => (
                  <button
                    key={item.name}
                    className={`size-5 rounded-full block ${item.style}`}
                    onClick={() =>
                      navigate("/notes/create", { state: { ...item } })
                    }
                  ></button>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
