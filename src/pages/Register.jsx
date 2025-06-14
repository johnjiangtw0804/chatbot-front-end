/**
 *
 * Node modules
 */
import { Link, Form, useNavigation, useActionData } from "react-router-dom";

/**
 * Components
 */
import PageTitle from "../components/PageTitle";
import TextField from "../components/TextField";
import { Button } from "../components/Buttons";

/**
 * Custom modules
 *
 */

import { banner, logoDark, logoLight } from "../assets/assets";
import { useEffect } from "react";

// https://wehelp.tw/topic/5732929242136576 dvh resource
const Register = () => {
  const currentState = useNavigation().state;
  // console.log(navigation.state);
  const actionData = useActionData();

  useEffect(() => {
    // https://reactrouter.com/api/hooks/useActionData
    if (actionData?.token) {
      localStorage.setItem("token", actionData.token);
      window.location.href = actionData.redirectTo;
    }
  }, [actionData]);

  console.log(actionData);
  useEffect(() => {
    if (actionData?.token) {
      localStorage.setItem("token", actionData.token);
      window.location.href = actionData.redirectTo;
    }
  }, [actionData]);

  return (
    <>
      <PageTitle title="Create an account"></PageTitle>
      <div className="grid relative w-screen h-dvh grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2 p-2">
        <div className="flex flex-col">
          <Link to="/" className="mx-auto max-w-max lg:mx-0 mb-auto">
            <img
              src={logoLight}
              alt="Company Logo Light"
              className="dark:hidden"
              width={133}
              height={24}
            ></img>
            <img
              src={logoDark}
              alt="Company Logo Dark"
              className="hidden dark:block"
              width={133}
              height={24}
            ></img>
          </Link>
          {/* 與 max-w-[480px] 結合時的效果：
          html
          Copy
          Edit
          <div className="w-full max-w-[480px] mx-auto">
          這樣的組合代表：
          w-full：預設佔滿父元素的寬度
          max-w-[480px]：限制最大寬度不超過 480px mx-auto：在水平方向置中 */}
          <div className="flex flex-col gap-2 max-w-[480px] mx-auto w-full">
            <h2
              className="text-displaySmall font-semibold text-(--text-dark-primary) dark:text-text-(--text-light-primary)
                          text-center"
            >
              Create an account
            </h2>
            <p
              className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1
            mb-5 text-center px-2"
            >
              Register now to receive free and accurate auto repair estimates.
            </p>
            <Form method="POST" className="grid grid-cols-1 gap-4">
              <TextField
                type="text"
                name="name"
                label="Full name"
                placeHolder="Enter your full Name"
                helperText={""}
                required={true}
                autoFocus={true} // 這個輸入框會在頁面打開時自動聚焦，使用者可以立刻開始輸入，不用點一下
              />
              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeHolder="exmaple@gmail.com"
                required={true}
              ></TextField>
              <TextField
                type="password"
                name="password"
                label="Password"
                placeHolder="Enter your password"
                required={true}
              ></TextField>
              <Button type="submit" disabled={currentState === "submitting"}>
                {currentState === "submitting"
                  ? "Submitting..."
                  : "Create account"}
              </Button>
            </Form>
            <p
              className="text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
            text-center mt-4"
            >
              Already have an account?
              <Link
                to="/login"
                className="inline-block ms-1 text-light-onSurface dark:text-dark-onSurface link"
              >
                Sign in
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
    </>
  );
};

export default Register;
