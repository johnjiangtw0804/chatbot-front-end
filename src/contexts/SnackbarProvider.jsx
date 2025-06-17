/**
 * Components
 */
import Snackbar from "../components/Snackbar";
import { SnackbarContext } from "./SnackbarContext";

/**
 * Node modules
 */
import { useState, useRef, useCallback, useMemo, Children } from "react";

const SnackbarProvider = ({ children }) => {
  // will change
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });

  // The returned object will persist for the full lifetime of the component.
  const timeoutRef = useRef();
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const showSnackbar = useCallback(
    ({ message, type = "info", timeout = 5000 }) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setSnackbar({ open: true, message, type });

      // auto hide the snackbar after timeout
      timeoutRef.current = setTimeout(() => {
        setSnackbar((prev) => {
          return { ...prev, open: false };
        });
      }, timeout);
    },
    []
  );

  // hide snackbar manually if needed
  const hideSnackbar = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSnackbar({ open: false, message: "", type: "info" });
  }, []);

  // memoize the context functions to prevent unnecessary rerender
  const contextValue = useMemo(() => {
    return { showSnackbar, hideSnackbar };
  }, [showSnackbar, hideSnackbar]);

  return (
    // construct the context
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar snackbar={snackbar} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
