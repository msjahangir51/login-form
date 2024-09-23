import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa6";

function Signup() {
  const initalvalue = {
    email: "",
    password: "",
    Confirm_Password: "",
  };
  const [lock, setLock] = useState(false);
  const [lock2, setLock2] = useState(false);
  const [loginval, setLoginval] = useState(initalvalue);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState(false);

  const loginOnchange = (e) => {
    const { value, name } = e.target;
    setLoginval({ ...loginval, [name]: value });
    console.log(loginval);
  };
  return (
    <div
      className={`flex justify-center items-center w-full h-auto min-h-screen bg-[url(../public/image.avif)] bg-center bg-cover`}
    >
      <div className="relative w-full max-w-[24rem] backdrop-blur-lg border-solid border-2 border-white rounded-lg px-3 py-4">
        <h1 className="text-center text-3xl font-bold border-b-[0.15rem] rounded-full pb-4 border-solid border-white-500 text-white">
          Signup
        </h1>
        <h1 className="text-white text-center mt-">
          Just some details to get you in.!
        </h1>
        <div className="space-y-6 mt-7">
          <div className="relative w-full h-[2.5rem]">
            <label
              className={`absolute ${
                email
                  ? "-top-[0.3rem] text-white-500"
                  : loginval.email
                  ? "-top-[0.3rem] text-white-500"
                  : "top-2/4"
              } -translate-y-2/4 left-0 text-white pointer-events-none transition-all duration-200 ease-linear`}
            >
              Email
            </label>
            <span className="absolute right-3 top-2/4 -translate-y-2/4 text-base text-white">
              <MdEmail />
            </span>
            <input
              onChange={loginOnchange}
              onFocus={() => setEmail(true)}
              onBlur={() => setEmail(false)}
              name="email"
              className={`w-full h-[2.5rem] border-b-2 text-white border-white border-solid bg-transparent outline-none pr-[2rem] transition-all duration-200`}
              type="text"
            />
          </div>
          <div className="relative w-full h-[2.5rem]">
            <label
              className={`absolute ${
                password
                  ? "-top-[0.3rem] text-white-500"
                  : loginval.password
                  ? "-top-[0.3rem] text-white-500"
                  : "top-2/4"
              } -translate-y-2/4 left-0 text-white pointer-events-none transition-all duration-200 ease-linear`}
            >
              Password
            </label>
            <span
              className="absolute right-3 top-2/4 -translate-y-2/4 text-base text-white cursor-pointer"
              onClick={() => setLock(!lock)}
            >
              {lock ? <FaLockOpen /> : <FaLock />}
            </span>
            <input
              name="password"
              onChange={loginOnchange}
              onFocus={() => setPassword(true)}
              onBlur={() => setPassword(false)}
              className={`w-full h-[2.5rem] border-b-2 text-white border-white border-solid bg-transparent outline-none pr-[2rem] transition-all duration-200`}
              type={lock ? "text" : "password"}
            />
          </div>
          <div className="relative w-full h-[2.5rem]">
            <label
              className={`absolute ${
                ConfirmPassword
                  ? "-top-[0.3rem] text-white-500"
                  : loginval.Confirm_Password
                  ? "-top-[0.3rem] text-white-500"
                  : "top-2/4"
              } -translate-y-2/4 left-0 text-white pointer-events-none transition-all duration-200 ease-linear`}
            >
              Confirm Password
            </label>
            <span
              className="absolute right-3 top-2/4 -translate-y-2/4 text-base text-white cursor-pointer"
              onClick={() => setLock2(!lock2)}
            >
              {lock2 ? <FaLockOpen /> : <FaLock />}
            </span>
            <input
              name="Confirm_Password"
              onChange={loginOnchange}
              onFocus={() => setConfirmPassword(true)}
              onBlur={() => setConfirmPassword(false)}
              className={`w-full h-[2.5rem] border-b-2 text-white border-white border-solid bg-transparent outline-none pr-[2rem] transition-all duration-200`}
              type={lock2 ? "text" : "password"}
            />
          </div>
          <button
            type="submit"
            className="bg-white-500 rounded-md text-black bg-white w-full capitalize px-5 py-1 mx-auto block cursor-pointer hover:bg-white/95"
          >
            Signup
          </button>
          <div class="text-white">
            <p>
              Already Registered?
              <a
                href="/login"
                className="ml-2 border-b-[1px] border-white border-solid"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
