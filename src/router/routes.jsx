/**
 * Node Modules https://reactrouter.com/6.30.1/routers/create-browser-router
 */

import { createBrowserRouter } from "react-router-dom";

/**
 * Components
 */

import App from "../App";
import Register from "../pages/Register";
import registerAction from "./actions/registerAction";

/**
 * Router: 用來 Map to different pages
 * https://www.w3schools.com/react/react_router.asp
 * https://reactrouter.com/6.30.1/routers/create-browser-router
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    action: registerAction,
  },
]);

export default router;
