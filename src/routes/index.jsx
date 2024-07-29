import BaseLayout from "@/layout/BaseLayout";
import {
  CreateNote,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
  Note,
  EditNote,
} from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthRequired from "./AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route
          path="notes/create"
          element={
            <AuthRequired>
              <CreateNote />
            </AuthRequired>
          }
        />
        <Route
          path="notes/:id"
          element={
            <AuthRequired>
              <Note />
            </AuthRequired>
          }
        />
        <Route
          path="notes/edit/:id"
          element={
            <AuthRequired>
              <EditNote />
            </AuthRequired>
          }
        />
        <Route
          path="profile"
          element={
            <AuthRequired>
              <Profile />
            </AuthRequired>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
