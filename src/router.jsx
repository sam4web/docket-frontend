import BaseLayout from "@/layout/BaseLayout";
import Home from "@/pages/Home";
import CreateNote from "@/pages/CreateNote";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateNote />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

export default router;
