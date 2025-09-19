import Error from "@/components/Error";
import AdminLayout from "@/layouts/AdminLayout";
import AdminAuthLoader from "@/loader/adminAuth";
import Candidate from "@/pages/admin/Candidate";
import Dashboard from "@/pages/admin/Dashboard";
import GetToken from "@/pages/admin/GetToken";
import User from "@/pages/admin/User";
import Vote from "@/pages/admin/Vote";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <Error />,
  loader: AdminAuthLoader,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "user", element: <User /> },
    { path: "candidate", element: <Candidate /> },
    { path: "vote", element: <Vote /> },
    {path: "gettoken", element: <GetToken />}
  ],
};

export default adminRoute;
