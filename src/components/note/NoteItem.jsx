import { Link, useNavigate } from "react-router-dom";
import formatDate from "@/utils/formatDate.js";
import { LuPencil } from "react-icons/lu";
import { useSelector } from "react-redux";
import { selectNoteById } from "@/features/note/noteApiSlice.js";

const NoteItem = ({ noteId }) => {
  const navigate = useNavigate();

  const note = useSelector(state => selectNoteById(state, noteId));

  const formatBody = (body) => {
    const maxLength = 200;
    if (body.length < maxLength) return body;
    return body.slice(0, maxLength) + "...";
  };


  return (
    <div
      className={`${note.style} dark:bg-opacity-70 size-full min-h-64 rounded-md shadow-md`}
    >
      <div className="font-medium flex flex-col justify-between h-full p-5">
        <Link className="space-y-1.5" to={`/notes/${note._id}`}>
          <h4 className="text-xl text-responsive">{note.title}</h4>
          {note?.body &&
            <p className="text-slate-900 dark:text-slate-200 whitespace-pre-line">
              {formatBody(note?.body || "")}
            </p>
          }
        </Link>
        <div className="flex-between">
          <p className="text-slate-900 dark:text-slate-200">
            {formatDate(note.updatedAt)}
          </p>
          <button
            className="sidebar-btn border-0 text-base p-2 dark:bg-light dark:text-dark dark:bg-opacity-85"
            onClick={() => navigate(`notes/edit/${note._id}`)}
          >
            <LuPencil />
          </button>
        </div>
      </div>
    </div>

  );
};

/*
        {notes === undefined || notes.length == 0 ? (
          <section className="text-center space-y-5 pt-20">
            <h2 className="text-2xl font-medium text-responsive">
              No Notes Found
            </h2>
            <button
              className="btn text-lg px-5 py-2.5"
              onClick={toggleColorVariants}
            >
              Create Note
            </button>
          </section>
        ) : (
          <section className="space-y-6">
            <h1 className="text-4xl text-responsive font-semibold">Notes</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 cursor-pointer">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className={`${note.style} dark:bg-opacity-75 size-full min-h-64 rounded-md shadow-md`}
                >
                  <div className="font-medium flex flex-col justify-between h-full p-5">
                    <Link className="space-y-1.5" to={`/notes/${note._id}`}>
                      <h4 className="text-xl text-responsive">{note.title}</h4>
                      <p className="text-slate-900 dark:text-slate-200 whitespace-pre-line">
                        {formatBody(note.body)}
                      </p>
                    </Link>
                    <div className="flex-between">
                      <p className="text-slate-900 dark:text-slate-200">
                        {formatDate(note.updatedAt)}
                      </p>
                      <button
                        className="sidebar-btn border-0 text-base p-2 dark:bg-light dark:text-dark dark:bg-opacity-85"
                        onClick={() => {
                          navigate(`notes/edit/${note._id}`);
                        }}
                      >
                        <LuPencil />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
*/

export default NoteItem;