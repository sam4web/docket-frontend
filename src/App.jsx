import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import { useEffect } from "react";
import { noteApiSlice } from "@/features/note/noteApiSlice.js";
import { store } from "@/app/store.js";


const App = () => {

  useEffect(() => {
    const notes = store.dispatch(noteApiSlice.endpoints.getAllNotes.initiate());

    return () => {
      notes.unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
