import { createBrowserRouter } from "react-router-dom";
import Root from "../../Page/Root/Root";
import Home from "../../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;