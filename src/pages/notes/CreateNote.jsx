import usePageTitle from "@/hooks/usePageTitle";
import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditSidebar from "@/components/sidebar/EditSidebar.jsx";
import Header from "@/components/header/Header.jsx";

const CreateNote = () => {
  usePageTitle("Add a Note | Docket");
  const navigate = useNavigate();
  const { state } = useLocation();

  const color = state?.color || "#8d99ae";
  const [note, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    { title: "", body: "" },
  );

  const handleSubmit = () => {
    console.log(note.title, note.body);
    navigate("/");
  };

  return (
    <>
      <EditSidebar
        eraseNote={() => dispatch({ title: "", body: "" })}
        submitNote={handleSubmit}
      />
      <div className="main-container">
        <Header iconsOnly />
        <section className="space-y-3.5">
          {/*<p className="error-text">{error here}</p>*/}
          <div className="flex gap-2">
            <div
              className="w-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <input
              className="note-title text-4xl font-medium"
              placeholder="Note title..."
              value={note.title}
              onChange={(e) => dispatch({ title: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Enter your text here..."
            className="min-h-[65vh] text-lg resize-none pe-4 note-message"
            value={note.body}
            onChange={(e) => dispatch({ body: e.target.value })}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="off"
          />
        </section>
      </div>
    </>
  );
};

export default CreateNote;
