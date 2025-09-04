import Error from "@/components/Error";
import AdminLayout from "@/layouts/AdminLayout";
import Candidate from "@/pages/admin/Candidate";
import Dashboard from "@/pages/admin/Dashboard";
import User from "@/pages/admin/User";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <Error />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "user", element: <User /> },
    { path: "candidate", element: <Candidate /> },
  ],
};

export default adminRoute;
