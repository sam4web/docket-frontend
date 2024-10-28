import formatDate from "@/utils/formatDate";
import { useNavigate, useParams } from "react-router-dom";
import EditSidebar from "@/components/sidebar/EditSidebar.jsx";
import Header from "@/components/header/Header.jsx";

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // demo note
  const note = {
    "_id": "671f5f040cd246ea05a745e7",
    "title": "Hello",
    "body": "Enthusiastically administrate global methods of empowerment whereas stand-alone manufactured products. Dramatically enhance mission-critical partnerships whereas adaptive bandwidth. Globally drive parallel paradigms vis-a-vis multifunctional information. Objectively reconceptualize virtual sources before flexible manufactured.",
    "createdAt": "2024-10-28T09:53:08.905Z",
    "updatedAt": "2024-10-28T10:32:52.358Z",
    "style": "orange",
  };


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

export default NoteDetail;
