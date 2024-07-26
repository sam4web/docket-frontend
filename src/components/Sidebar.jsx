import classNames from "classnames";
import { useState } from "react";
import { LuPlus, LuCheck } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ handleSubmit }) => {
  const [showColorVariants, setShowColorVariants] = useState(false);

  const colorVariants = [
    { name: "orange", style: "bg-[#ee9b00]" },
    { name: "coral", style: "bg-[#f07167]" },
    { name: "blue", style: "bg-[#90e0ef]" },
    { name: "lime", style: "bg-[#a7c957]" },
    { name: "purple", style: "bg-[#a06cd5]" },
  ];

  const navigate = useNavigate();

  return (
    <section className="px-4 py-4 lg:py-6 border-transparent border-r dark:border-slate-700 border-zinc-300">
      <div className="sm:space-y-9 sm:block flex-between">
        <Link to="/">
          <h2 className="text-xl font-medium dark:text-light text-dark select-none cursor-pointer">
            docket
          </h2>
        </Link>
        <div className="flex-center flex-row-reverse sm:flex-col gap-5">
          <button
            className={classNames(
              [
                "bg-dark text-light text-2xl p-2 rounded-full shadow-sm border-2 border-light",
              ],
              { "rotate-90": showColorVariants }
            )}
            onClick={() => {
              handleSubmit
                ? handleSubmit()
                : setShowColorVariants((prev) => !prev);
            }}
          >
            {handleSubmit ? <LuCheck /> : <LuPlus />}
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
                    onClick={() => navigate("/create", { state: { ...item } })}
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
