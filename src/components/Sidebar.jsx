import classNames from "classnames";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [showColorVariants, setShowColorVariants] = useState(true);
  const toggleColorVariants = () => setShowColorVariants(prev => !prev);


  const colorVariants = [
    "orange",
    "coral",
    "blue",
    "lime",
    "purple",
  ];


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
              && colorVariants.map((color, idx) => (
                <button
                  key={idx}
                  className={`size-5 rounded-full block ${color}`}
                  onClick={() => console.log(color)}
                ></button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
