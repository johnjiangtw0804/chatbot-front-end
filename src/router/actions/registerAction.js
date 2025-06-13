import axios from "axios";
import { redirect } from "react-router-dom";

const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const host = import.meta.env.VITE_BACKEND_HOSTNAME;
  const port = import.meta.env.VITE_BACKEND_PORT;
  const url = `http://${host}:${port}/api/v1/register`;

  try {
    const response = await axios.post(url, { name, email, password });
    console.log("Register success:", response.data);

    const jwt = response.data.token;
    if (jwt) {
      localStorage.setItem("token", jwt);
    } else {
      return redirect("/login")
    }

    return redirect("/");
  } catch (err) {
    console.error("Register failed:", err.response?.data || err.message);
    return {
      error: err.response?.data?.message || err.message || "Registration failed",
    };
  }
};

export default registerAction;
