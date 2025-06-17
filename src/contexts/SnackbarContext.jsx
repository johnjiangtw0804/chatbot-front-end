/**
 * Node modules
 */
import { createContext } from "react";

const initialContextValue = {
  // Snackbar: {
  //   open: false,
  //   message: "",
  //   type: "info",
  // },
  showSnackbar: ({ message, type = "info", timeout = 5000 }) => {},
  hideSnackbar: () => {},
};

// this is like a channel
export const SnackbarContext = createContext(initialContextValue);
