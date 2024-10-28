import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/Home.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  </>,
));

export default router;