import {
  createContext,
  useState,
  useRef,
  useCallback,
  Children,
  useMemo,
} from "react";

/**
 * Component
 */
import Snackbar from "../components/Snakbar";

const initialContextValue = {
  Snackbar: {
    open: false,
    message: "",
    type: "info",
  },
  showSnackbar: ({ message, type = "info", timeout = 5000 }) => {},
  hideSnackbar: () => {},
};

export const SnackbarContext = createContext(initialContextValue);

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });

  const timeoutRef = useRef();
  const showSnackbar = useCallback(
    ({ message, type = "info", timeout = 5000 }) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setSnackbar({ open: true, message, type });

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

  // memoize the context value to prevent unnecessary rerender
  const contextValue = useMemo(() => {
    return { showSnackbar, hideSnackbar };
  }, [showSnackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar snackbar={snackbar} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
