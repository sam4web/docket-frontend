import { Header, EditSidebar } from "@/components";
import { useReducer } from "react";
import { useLocation } from "react-router-dom";

const CreateNote = () => {
  const { state } = useLocation();
  const [note, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    { title: "", message: "" }
  );

  const submitNote = () => {
    console.log(note);
  };

  return (
    <>
      <EditSidebar
        eraseNote={() => dispatch({ title: "", message: "" })}
        submitNote={submitNote}
      />
      <div className="main-container">
        <Header iconsOnly />

        <section className="space-y-3.5">
          <div className="flex gap-2">
            <div
              className={`w-1.5 rounded-full ${state?.style || "bg-grey"} `}
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
            value={note.message}
            onChange={(e) => dispatch({ message: e.target.value })}
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
