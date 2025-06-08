/**
 * Node Modules https://reactrouter.com/6.30.1/routers/create-browser-router
 */

import { createBrowserRouter } from "react-router-dom";

/**
 * Components
 */

import App from "../App";
import Register from "../pages/Register";

/**
 * Router: 用來 Map to different pages
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
