import { LuCheck, LuEraser, LuPencil, LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

const EditSidebar = ({ eraseNote, submitNote, editNote, deleteNote }) => {
  return (
    <section className="px-4 py-4 lg:py-6 border-transparent border-r dark:border-slate-700 border-zinc-300">
      <div className="sm:space-y-9 sm:block flex-between">
        <Link to="/">
          <h2 className="text-xl font-medium text-responsive select-none cursor-pointer">
            docket
          </h2>
        </Link>
        <div className="flex-center flex-row-reverse sm:flex-col gap-1.5 sm:gap-3.5">
          {submitNote && (
            <button className="sidebar-btn" onClick={submitNote}>
              <LuCheck />
            </button>
          )}
          {eraseNote && (
            <button className="sidebar-btn" onClick={eraseNote}>
              <LuEraser />
            </button>
          )}
          {editNote && (
            <button className="sidebar-btn" onClick={editNote}>
              <LuPencil />
            </button>
          )}
          {deleteNote && (
            <button className="sidebar-btn" onClick={deleteNote}>
              <LuTrash />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditSidebar;
