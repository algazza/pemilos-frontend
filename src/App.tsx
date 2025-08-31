import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import adminRoute from "./routes/adminRoute";
import userRoute from "./routes/userRoute";

const router = createBrowserRouter([
  userRoute,
  adminRoute,
  { path: "*", element: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
