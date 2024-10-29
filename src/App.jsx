import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import { store } from "@/app/store.js";
import { fetchAllNotes } from "@/features/note/noteThunks.js";
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
    store.dispatch(fetchAllNotes());

  });
  return <RouterProvider router={router} />;
};

export default App;
