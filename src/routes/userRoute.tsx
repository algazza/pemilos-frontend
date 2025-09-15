import Error from "@/components/Error";
import MainLayout from "@/layouts/MainLayout";
import authLoader from "@/loader/auth";
import Form from "@/pages/form/Form";
import Home from "@/pages/Home";
import Login from "@/pages/login/login";

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
