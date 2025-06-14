import axios, { HttpStatusCode } from "axios";

// https://reactrouter.com/6.30.1/route/action
const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const host = import.meta.env.VITE_BACKEND_HOSTNAME;
  const port = import.meta.env.VITE_BACKEND_PORT;
  const url = `http://${host}:${port}/api/v1/register`;

  try {
    // https://axios-http.com/docs/res_schema
    const response = await axios.post(url, { name, email, password });
    const token = response.data?.token;
    console.log("Register success:", response.data);
    console.log("response status", response.status)
    return {
      body: {
        token: token || null,
        redirectTo: token ? "/" : "/login",
      },
    }
  } catch (err) {
    console.log(err.response?.data?.error)
    return {
      status: HttpStatusCode.BadRequest,
      body: {
        error: err.response?.data?.error || err.message || "Registration failed",
      },
    }
  }
};

export default registerAction;
