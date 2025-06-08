/**
 *
 * Node modules
 */
import { Link, Form } from "react-router-dom";

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

// https://wehelp.tw/topic/5732929242136576 dvh resource
const Register = () => {
  return (
    <>
      <PageTitle title="Create an account"></PageTitle>
      <div className="grid relative w-screen h-dvh grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2 p-2">
        <div className="flex flex-col">
          <Link>
            <img
              src={logoDark}
              alt="Company Logo Dark"
              className=""
              width={133}
              height={24}
            ></img>
            <img
              src={logoLight}
              alt="Company Logo Light"
              className=""
              width={133}
              height={24}
            ></img>
          </Link>
          <div className="">
            <h2> Create an account</h2>
            <p>
              Register now to receive free and accurate auto repair estimates.
            </p>
            <Form method="POST" className="">
              <TextField
                type="text"
                name="name"
                label="full name"
                placeHolder="Full Name"
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
              <Button type="submit">Create account</Button>
            </Form>
            <p className="">
              Already have an account?
              <Link to="/login" className="">
                Sign in
              </Link>
            </p>
          </div>
          <p className="">&copy; 2025 johnjiangtw0804. All right reserved</p>
        </div>
        <div className="img-cover">
          <img src={banner} alt="" className=""></img>
          <p>Register today for your free trial</p>
        </div>
      </div>
    </>
  );
};

export default Register;
