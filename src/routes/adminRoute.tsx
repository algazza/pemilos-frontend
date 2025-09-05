import Error from "@/components/Error";
import AdminLayout from "@/layouts/AdminLayout";
import Candidate from "@/pages/admin/Candidate";
import Dashboard from "@/pages/admin/Dashboard";
import User from "@/pages/admin/User";
import Vote from "@/pages/admin/Vote";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <Error />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "user", element: <User /> },
    { path: "candidate", element: <Candidate /> },
    { path: "vote", element: <Vote /> },
  ],
};

export default adminRoute;
