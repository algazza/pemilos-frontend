import Error from "@/components/Error";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import User from "@/pages/admin/User";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <Error />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "user", element: <User /> },
  ],
};

export default adminRoute;
