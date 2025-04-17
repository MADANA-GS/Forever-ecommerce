import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className=" flex flex-col items-center m-auto sm:max-w-96 mt-12 gap-4 text-gray-800 w-[90%]"
    >
      <div className="inline-flex items-center gap2 mt10 mb-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 ml-2 bg-gray-800" />
      </div>
      <input
        type="text"
        className={`${
          currentState === "Login" ? "hidden" : ""
        } w-full px-3 py-2 border border-gray-800 `}
        required
        placeholder="Name "
      />
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        required
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        required
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password</p>
        {currentState === "Sign Up" ? (
          <p
            className="cursor-pointer "
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        ) : (
          <p
            className="cursor-pointer "
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
