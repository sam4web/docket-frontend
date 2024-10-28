import { useNavigate } from "react-router-dom";
import { useGetAllNotesQuery } from "@/features/note/noteApiSlice.js";
import Spinner from "@/components/common/Spinner.jsx";
import NoteItem from "@/components/note/NoteItem.jsx";

// TODO: Create return statement for error & isError

const NoteList = () => {
  const navigate = useNavigate();

  const { data: notes, isLoading, isSuccess, isError, error } = useGetAllNotesQuery();

  if (isLoading) return (
    <section className="flex-center pt-20">
      <Spinner />
    </section>
  );

  const { ids } = notes;
  if (ids === undefined || !ids.length)
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
        {ids.map((noteId) => (
          <NoteItem noteId={noteId} key={noteId} />
        ))}
      </div>
    </section>);
};

export default NoteList;