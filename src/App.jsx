import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa6";
function App() {
  const initalvalue = {
    email: "",
    password: "",
  };
  const [lock, setLock] = useState(false);
  const [loginval, setLoginval] = useState(initalvalue);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

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
          Login
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

          <div class="w-full flex justify-between pr-5 text-white">
            <label for="checkbox" className="text-white">
              <input type="checkbox" id="checkbox" /> Remember me
            </label>
            <a
              className="ml-3 text-white-700 border-b-[1px] border-solid border-white"
              href="#"
            >
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            className="bg-white-500 rounded-md text-black bg-white w-full capitalize px-5 py-1 mx-auto block cursor-pointer hover:bg-white/95"
          >
            Login
          </button>
          <div class="text-white">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="ml-2 border-b-[1px] border-white border-solid"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
