import Error from "@/components/Error";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <Error />,
  children: [{ index: true, element: <Dashboard /> }],
};

export default adminRoute;
