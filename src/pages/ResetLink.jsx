/**
 *
 * Node modules
 */
import { Link, Form, useNavigation, useActionData } from "react-router-dom";

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
import { useEffect, useState } from "react";

/**
 * Assets
 */
import { banner, logoDark, logoLight } from "../assets/assets";

/**
 *
 * Custom hooks
 */
import { useSnackbar } from "../hooks/useSnackbar";

const ResetLink = () => {
  const navigationState = useNavigation().state;
  const actionData = useActionData();
  const { showSnackbar } = useSnackbar();
  const [sent, setSent] = useState(false);

  // 這段邏輯是：「每次後端回傳新資料，就決定要顯示成功還是錯誤訊息」。
  useEffect(() => {
    if (actionData?.body?.sent) {
      setSent(true);
      showSnackbar({
        message:
          actionData.body.message ||
          "If the email exists, a reset link has been sent.",
        type: "success",
      });
      return;
    }

    if (actionData?.body?.error) {
      showSnackbar({ message: actionData.body.error, type: "error" });
    }
  }, [actionData, showSnackbar]); // 代表只有當 actionData 或 showSnackbar 改變時，這個 effect 才會重新跑。

  const isSubmitting = navigationState === "submitting";

  return (
    <>
      <PageTitle title="Reset password"></PageTitle>
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
              Reset your password
            </h2>
            <p
              className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1
              mb-5 text-center px-2"
            >
              Enter your email to receive a password reset link.
            </p>
            <Form method="POST" className="grid grid-cols-1 gap-4" replace>
              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeHolder="example@gmail.com"
                required={true}
                autoFocus={true} // 這個輸入框會在頁面打開時自動聚焦，使用者可以立刻開始輸入，不用點一下
              ></TextField>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <CircularProgress size="small" />
                ) : (
                  "Send reset link"
                )}
              </Button>
            </Form>
            {sent && (
              <p className="text-bodyMedium text-light-onSurface dark:text-dark-onSurface text-center">
                If this email is registered, you&apos;ll receive a reset link
                shortly.
              </p>
            )}
            <p
              className="text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
              text-center mt-4"
            >
              Remembered your password?
              <Link
                to="/login"
                className="inline-block ms-1 text-light-onSurface dark:text-dark-onSurface link"
              >
                Back to sign in
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
        {isSubmitting && (
          <LinearProgress classes="absolute top-0 left-0 right-0" />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetLink;
