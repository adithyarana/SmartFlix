import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidation } from "../utils/Validate.jsx";

const Login = () => {
  const [issigninform, setissigninform] = useState(true);
  const [errormessage , seterrormessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleform = () => {
    setissigninform(!issigninform);
  };

  const handleError = () => {
    // validate form data
    const errormessage = CheckValidation(email.current.value , password.current.value)
        seterrormessage(errormessage)
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"
        alt="banner"
      />

      {/* Centered Form Container */}
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black opacity-85 p-8 rounded-md flex flex-col gap-6 w-[300px] h-auto"
        >
          <h1 className="text-white text-2xl font-bold drop-shadow-md">
            {issigninform ? "Sign In" : "Sign Up"}
          </h1>

          {!issigninform && (
            <input
              className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            type="text"
            placeholder="Email"
          />
         

          <input
            ref={password}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            type="password"
            placeholder="Password"
          />

          <p className="text-red-600 text-sm">{errormessage}</p> 

          <button
            onClick={handleError}
            className="bg-red-600 hover:bg-red-700 text-white py-2 rounded cursor-pointer"
          >
            {issigninform ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm">
            {issigninform ? "New to SmartFlix" : "Already have an account?"}{" "}
            <span
              onClick={toggleform}
              className="text-red-600 cursor-pointer hover:underline"
            >
              {issigninform ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
