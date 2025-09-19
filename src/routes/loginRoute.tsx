import Error from "@/components/Error";
import Login from "@/pages/login/login";

const loginRoute = {
  path: "/login",
  element: <Login />,
  errorElement: <Error />,
};

export default loginRoute;
