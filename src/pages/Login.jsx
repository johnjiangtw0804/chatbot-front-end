/**
 *
 * Node modules
 */
import {
  Link,
  Form,
  useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

/**
 * Components
 */
import PageTitle from "../components/PageTitle";
import TextField from "../components/TextField";
import { Button } from "../components/Buttons";
import { CircularProgress, LinearProgress } from "../components/Progress";

/**
 * Custom modules
 *
 */
import { useEffect } from "react";

/**
 * Assets
 */
import { banner, logoDark, logoLight } from "../assets/assets";

/**
 *
 * Custom hooks
 */
import { useSnackbar } from "../hooks/useSnackbar";

const Login = () => {
  const currentState = useNavigation().state;
  const actionData = useActionData();

  // 拆開 context
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    // https://reactrouter.com/api/hooks/useActionData
    if (actionData?.body?.token) {
      // TODO: might store in the cookie in the future
      localStorage.setItem("token", actionData.token);
      navigate(actionData.body.redirectTo);
      return;
    }

    // show snackbar with the server's message
    if (actionData?.body?.error) {
      console.log("snackbar triggered");
      showSnackbar({ message: actionData.body.error, type: "error" });
    }
  }, [actionData, navigate, showSnackbar]);

  return (
    <>
      <PageTitle title="Login"></PageTitle>
      <div className="grid relative w-screen h-dvh grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2 p-2">
        <div className="flex flex-col">
          <Link to="/" className="mx-auto max-w-max lg:mx-0 mb-auto">
            <img
              src={logoLight}
              alt="Company Logo Light"
              className="dark:hidden rounded-2xl"
              width={133}
              height={24}
            ></img>
            <img
              src={logoDark}
              alt="Company Logo Dark rounded-2xl"
              className="hidden dark:block"
              width={133}
              height={24}
            ></img>
          </Link>
          {/* 與 max-w-[480px] 結合時的效果：
            <div className="w-full max-w-[480px] mx-auto">
            這樣的組合代表：
            w-full：預設佔滿父元素的寬度
            max-w-[480px]：限制最大寬度不超過 480px mx-auto：在水平方向置中 */}
          <div className="flex flex-col gap-2 max-w-[480px] mx-auto w-full">
            <h2
              className="text-displaySmall font-semibold text-(--text-dark-primary) dark:text-text-(--text-light-primary)
                            text-center"
            >
              Welcome Back to PIT & GO
            </h2>
            <p
              className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1
              mb-5 text-center px-2"
            >
              Enter your account details
            </p>
            <Form method="POST" className="grid grid-cols-1 gap-4">
              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeHolder="exmaple@gmail.com"
                required={true}
                autoFocus={true} // 這個輸入框會在頁面打開時自動聚焦，使用者可以立刻開始輸入，不用點一下
              ></TextField>
              <TextField
                type="password"
                name="password"
                label="Password"
                placeHolder="Enter your password"
                required={true}
              ></TextField>
              <div className="text-right">
                <Link className="link text-sm" to="/reset-link">
                  Forgot password?{" "}
                </Link>
              </div>

              <Button type="submit" disabled={currentState === "submitting"}>
                {currentState === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Sign in"
                )}
              </Button>
            </Form>
            <p
              className="text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
              text-center mt-4"
            >
              Don&apos;t have an account?
              <Link
                to="/register"
                className="inline-block ms-1 text-light-onSurface dark:text-dark-onSurface link"
              >
                Create an account
              </Link>
            </p>
          </div>
          <p
            className="mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
            text-bodyMedium lg-mx-0"
          >
            &copy; 2025 johnjiangtw0804. All right reserved
          </p>
        </div>
        <div className="hidden lg:block img-box lg:relative lg:rounded-2xl lg:overflow-hidden">
          <img src={banner} alt="my banner" className="img-cover"></img>
          <p
            className="absolute bottom-10 left-12 right-12 z-10 display-large font-semibold
                        leading-tight text-right text-dark-onSurface drop-shadow-amber-50 2xl:text-[72px] mx-auto"
          >
            Get an instant AI estimate. Repair with confidence
          </p>
        </div>
      </div>
      <AnimatePresence>
        {currentState === "loading" && (
          <LinearProgress classes="absolute top-0 left-0 right-0" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Login;
