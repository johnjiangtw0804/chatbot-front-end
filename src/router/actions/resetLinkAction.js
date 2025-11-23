import axios, { HttpStatusCode } from "axios";

// https://reactrouter.com/en/main/route/action
const resetLinkAction = async ({ request }) => {
  const formData = await request.formData();
  const email = (formData.get("email") || "").trim();

  if (!email) {
    return {
      status: HttpStatusCode.BadRequest,
      body: { error: "Email is required" },
    };
  }

  const host = import.meta.env.VITE_BACKEND_HOSTNAME;
  const port = import.meta.env.VITE_BACKEND_PORT;
  const url = `http://${host}:${port}/api/v1/user/reset-link`;

  try {
    await axios.post(url, { email });
    return {
      body: {
        sent: true,
        message: "If the email exists, a reset link has been sent.",
      },
    };
  } catch (err) {
    return {
      status: err.response?.status || HttpStatusCode.BadRequest,
      body: {
        error:
          err.response?.data?.error ||
          err.message ||
          "Unable to send reset link. Please try again.",
      },
    };
  }
};

export default resetLinkAction;
