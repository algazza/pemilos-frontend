import Error from "@/components/Error";
import { MPK01Details, MPK02Details, MPK03Details, OSIS01Details, OSIS02Details, OSIS03Details } from "@/data/candidate";
import MainLayout from "@/layouts/MainLayout";
import authLoader from "@/loader/auth";
import Form from "@/pages/form/Form";
import Home from "@/pages/Home";
import Login from "@/pages/login/login";

export const detailsMap = {
  "MPK-1": MPK01Details,
  "MPK-2": MPK02Details,
  "MPK-3": MPK03Details,
  "OSIS-1": OSIS01Details,
  "OSIS-2": OSIS02Details,
  "OSIS-3": OSIS03Details,
};

const userRoute = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Error />, 
  children: [
    { index: true, element: <Home />, loader: authLoader},
    { path: "login", element: <Login /> },
    { path: "form", element: <Form />, loader: authLoader },
  ],
};

export default userRoute;
