import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import PostDetails from "@/pages/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
    ],
  },
]);

export default router;
