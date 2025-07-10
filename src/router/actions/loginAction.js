import axios, { HttpStatusCode } from "axios";

// https://reactrouter.com/6.30.1/route/action
const loginAction = async ({ request }) => {
    const formData = await request.formData();

    console.log(formData)
    const email = formData.get("email");
    const password = formData.get("password");
    const host = import.meta.env.VITE_BACKEND_HOSTNAME;
    const port = import.meta.env.VITE_BACKEND_PORT;

    // TODO: Change to HTTPS
    const url = `http://${host}:${port}/api/v1/user/login`;

    // try to receive jwt token from the backend server
    try {
        const response = await axios.post(url, {email, password});
        const token = response.data?.token;
        return {
            body: {
                token: token || null,
                redirectTo: token ? "/" : "/register",
            }
        }
    } catch (err) {
        return {
          status: HttpStatusCode.BadRequest,
          body: {
            error: err.response?.data?.error || err.message || "Login failed",
          },
        }
    }
};

export default loginAction;
