import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

/** Custom Modules */
import router from "./router/routes";

/** CSS link */
import "./index.css";

/** Router 主頁 */
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
