import { Header, Sidebar } from "@/components";
import { useLocation } from "react-router-dom";

const CreateNote = () => {
  const { state } = useLocation();

  return (
    <>
      <Sidebar
        handleSubmit={() => {
          console.log("hello");
        }}
      />
      <div className="main-container">
        <Header icons />

        <div className="space-y-3.5">
          <div className="flex gap-2.5">
            <div
              className={`w-1 rounded-full ${state?.style || "bg-grey"}`}
            ></div>
            <input
              className="text-4xl font-medium"
              placeholder="Note title..."
            />
          </div>
          <textarea
            placeholder="Enter your text here..."
            className="h-[65vh] text-lg resize-none pe-4"
          />
        </div>
      </div>
    </>
  );
};

export default CreateNote;
