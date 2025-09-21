import { RouterProvider, createBrowserRouter } from "react-router-dom";
import adminRoute from "./routes/adminRoute";
import userRoute from "./routes/userRoute";
import loginRoute from "./routes/loginRoute";
import NotFoundPage from "./components/NotFound";

const router = createBrowserRouter([
  userRoute,
  adminRoute,
  loginRoute,
  { path: "*", element: <NotFoundPage/> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
