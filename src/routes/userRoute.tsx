import Error from "@/components/Error";
import { MPK01Details, MPK02Details, OSIS01Details, OSIS02Details } from "@/data/candidate";
import MainLayout from "@/layouts/MainLayout";
import CalonPage from "@/pages/Calon";
import Home from "@/pages/Home";
import PaslonPage from "@/pages/Paslon";

export const detailsMap = {
  "MPK-1": MPK01Details,
  "MPK-2": MPK02Details,
  "OSIS-1": OSIS01Details,
  "OSIS-2": OSIS02Details,
};

const userRoute = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Error />, 
  children: [
    { index: true, element: <Home /> },
    { path: "paslon", element: <PaslonPage /> },
    { path: ":orgz/:number", element: <CalonPage /> },
  ],
};

export default userRoute;
