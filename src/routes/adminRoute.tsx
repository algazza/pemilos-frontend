import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import GetToken from "@/pages/admin/GetToken";
import User from "@/pages/admin/User";
import Vote from "@/pages/admin/Vote";

const adminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "user", element: <User /> },
    { path: "vote", element: <Vote /> },
    {path: "gettoken", element: <GetToken />}
  ],
};

export default adminRoute;