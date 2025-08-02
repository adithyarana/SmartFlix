import React from 'react';
import Header from './Header';

const Login = () => {
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
        <form className="bg-black opacity-90 p-8 rounded-md flex flex-col gap-4 w-[300px]">
            <h1 className="text-white text-2xl font-bold drop-shadow-md">Sign In</h1>
          <input
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
