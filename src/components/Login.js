import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img src={BG_URL} alt="bg-img"></img>
      </div>
      <form className=" w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg custom-number-input"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
