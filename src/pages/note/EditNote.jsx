import { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditSidebar from "@/components/EditSidebar.jsx";
import Header from "@/components/Header.jsx";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    { title: "", body: "" },
  );

  const updateNote = () => {
    console.log(`Note with ID: ${id} updated`);
    navigate(`/notes/${id}`);
  };

  const deleteNote = () => {
    console.log(`Note with ID: ${id} deleted`);
    navigate("/");
  };


  return (
    <>
      <EditSidebar
        eraseNote={() => dispatch({ title: "", body: "" })}
        submitNote={updateNote}
        deleteNote={deleteNote}
      />

      <div className="main-container">
        <Header iconsOnly />
        <section className="space-y-3.5">
          <div className="flex gap-2">
            <div
              className={`w-1.5 rounded-full ${"bg-grey"} `}
            ></div>
            <input
              className="note-title text-4xl font-medium"
              placeholder="Note title..."
              value={note.title}
              onChange={(e) => dispatch({ title: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Enter your text here..."
            className="h-[65vh] text-lg resize-none pe-4 note-message"
            value={note.body}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="off"
            onChange={(e) => dispatch({ body: e.target.value })}
          />
        </section>
      </div>
    </>
  );
};

export default EditNote;
