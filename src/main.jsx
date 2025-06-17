import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

/** Custom Modules */
import router from "./router/routes";

/** Components */
import SnackbarProvider from "./contexts/SnackbarProvider";

/** CSS link */
import "./index.css";

/** Router 主頁 */
createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <RouterProvider router={router} />
  </SnackbarProvider>
);
