import Error from "@/components/Error";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";

const userRoute = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Error />,
  children: [{ index: true, element: <Home /> }],
};

export default userRoute;
