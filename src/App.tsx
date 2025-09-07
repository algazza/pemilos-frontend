import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import userRoute from "./routes/userRoute";

const router = createBrowserRouter([
  userRoute,
  { path: "*", element: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
