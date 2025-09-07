import Error from "@/components/Error";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import PaslonPage from "@/pages/Paslon";

const userRoute = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Error />,
  children: [
    { index: true, element: <Home /> },
    { path: "paslon", element: <PaslonPage /> },
  ],
};

export default userRoute;
