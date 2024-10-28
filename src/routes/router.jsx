import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/Home.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";
import CreateNote from "@/pages/note/CreateNote.jsx";
import EditNote from "@/pages/note/EditNote.jsx";
import NoteDetail from "@/pages/note/NoteDetail.jsx";
import Profile from "@/pages/Profile.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/notes"}>
        <Route index element={<Home />} />
        <Route path={":id"} element={<NoteDetail />} />
        <Route path={"create"} element={<CreateNote />} />
        <Route path={"edit/:id"} element={<EditNote />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Route>
  </>,
));

export default router;