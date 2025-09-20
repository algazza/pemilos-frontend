import { MPK01Details, MPK02Details, MPK03Details, OSIS01Details, OSIS02Details, OSIS03Details } from "@/data/candidate";
import MainLayout from "@/layouts/MainLayout";
import getCandidateLoader from "@/loader/getCandidate";
import userAuthLoader from "@/loader/userAuth";
import Form from "@/pages/form/Form";
import Home from "@/pages/Home";

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
  loader: userAuthLoader,
  children: [
    { index: true, element: <Home />, },
    { path: "form", element: <Form />, loader: getCandidateLoader },
  ],
};

export default userRoute;
