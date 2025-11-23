import { HttpStatusCode } from "axios";
import { redirect } from "react-router-dom";

/**
 * Node modules
 */
  const host = import.meta.env.VITE_BACKEND_HOSTNAME;
  const port = import.meta.env.VITE_BACKEND_PORT;

const loginLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log(`No token found`);
    return null;
  }

  const response = await fetch(`http://${host}:${port}/validate`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    throw redirect("/");
  }
  // drop malformed/expired tokens to avoid repeatedly sending bad credentials
  localStorage.removeItem("token");
  console.log("Invalid token, status:", response.status);
  return null;
};

export default loginLoader;
