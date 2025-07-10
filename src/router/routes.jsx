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
import Login from "../pages/Login";
import loginAction from "./actions/loginAction";
import NotFoundPage from "../components/Errors/NotFoundPage";
/**
 * Router: 用來 Map to different pages
 * https://www.w3schools.com/react/react_router.asp
 * https://reactrouter.com/6.30.1/routers/create-browser-router
 */
const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login></Login>,
    action: loginAction,
  },
]);

export default router;
