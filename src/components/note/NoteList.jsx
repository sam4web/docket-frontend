import { useNavigate } from "react-router-dom";
import Spinner from "@/components/common/Spinner.jsx";
import Emoji from "@/components/common/Emoji.jsx";
import { useSelector } from "react-redux";
import { getNoteError, getNoteStatus, selectAllNotes } from "@/features/note/noteSlice.js";
import NoteItem from "@/components/note/NoteItem.jsx";


const NoteList = () => {
  const navigate = useNavigate();

  const notes = useSelector(selectAllNotes);
  const status = useSelector(getNoteStatus);
  const error = useSelector(getNoteError);

  if (status === "loading")
    return (
      <section className="flex-center pt-20">
        <Spinner />
      </section>
    );

  if (status === "failed") return (
    <section className="text-center pt-20 space-x-2 text-2xl">
      <span className="error-text font-medium">{error}</span>
      <Emoji label={"warning"} symbol={"⚠️"} />
    </section>);

  if (!notes.length)
    return (
      <section className="text-center space-y-7 md:space-y-10 pt-20">
        <h2 className="text-3xl md:text-4xl font-medium text-responsive">
          No Notes Found
        </h2>
        <button
          className="btn text-lg px-5 py-2.5"
          onClick={() => navigate("/notes/create")}>
          Create Note
        </button>
      </section>
    );

  return (
    <section className="space-y-6">
      <h1 className="text-4xl text-responsive font-semibold">Notes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 cursor-pointer">
        {notes.map(({ _id }) => (
          <NoteItem noteId={_id} key={_id} />
        ))}
      </div>
    </section>);
};

export default NoteList;