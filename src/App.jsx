import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Details from "./Details";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/:name",
      element: <Details />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}