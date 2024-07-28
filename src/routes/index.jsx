import BaseLayout from "@/layout/BaseLayout";
import { CreateNote, Home, Login, Profile, Register } from "@/pages";
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
          path="create"
          element={
            <AuthRequired>
              <CreateNote />
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
      </Route>
    </>
  )
);

export default router;
