import Error from "@/components/Error";
import Dashboard from "@/pages/admin/Dashboard";
import Login from "@/pages/login/login";

const loginRoute = {
  path: "/login",
  element: <Login />,
  errorElement: <Error />,
  children: [{ index: true, element: <Dashboard /> }],
};

export default loginRoute;
