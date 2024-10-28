import classNames from "classnames";
import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoText from "@/components/header/LogoText.jsx";

const Sidebar = () => {
  const navigate = useNavigate();

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
        <LogoText />
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
                  onClick={() => navigate("/notes/create", { state: { style: color } })}
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
