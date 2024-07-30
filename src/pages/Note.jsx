import { EditSidebar, Header } from "@/components";
import noteStore from "@/stores/noteStore";
import formatDate from "@/utils/formatDate";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  const { currentNote: note, fetchNote } = noteStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNote(id);
  }, [id]);

  return (
    <>
      <EditSidebar editNote={() => navigate(`/notes/edit/${id}`)} />
      <div className="main-container">
        <Header iconsOnly />

        <section className="space-y-5">
          <div className="space-y-3">
            <div className="flex gap-2">
              <div
                className={`w-1.5 rounded-full ${note.style || "bg-grey"} `}
              ></div>
              <h3 className="note-title text-4xl font-medium">{note.title}</h3>
            </div>
            <p className="text-slate-900 dark:text-slate-200 font-medium">
              {formatDate(note.updatedAt)}
            </p>
          </div>
          <p className="h-[65vh] text-lg resize-none pe-4 note-message whitespace-pre-line">
            {note.body}
          </p>
        </section>
      </div>
    </>
  );
};

export default Note;
