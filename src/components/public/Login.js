import React, { useState } from "react";
import { Link } from "react-router-dom";
import LongBtn from "../../utils/LongBtn";

export default function Login() {
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");

   const [userEmailError, setUserEmailError] = useState("");
   const [userPasswordError, setUserPasswordError] = useState("");

   const validate = () => {
      let isError = false;
      if (userEmail === "") {
         isError = true;
         setUserEmailError("Please enter your email");
      } else {
         setUserEmailError("");
      }

      if (userPassword === "") {
         isError = true;
         setUserPasswordError("Please enter your password");
      } else {
         setUserPasswordError("");
      }
      return isError;
   };
   const handleSubmit = (event) => {
      event.preventDefault();
      const err = validate();
      if (!err) {
         console.log("User's Email:", userEmail);
         console.log("User's Password:", userPassword);
         setUserEmail("");
         setUserPassword("");
      }
   };

   return (
      <form
         className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8 md:pt-2 md:pb-6 md:px-4 md:rounded-b-lg"
         onSubmit={handleSubmit}
      >
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase md:mb-3">
            Login
         </samp>
         <div className="mb-3 md:mb-1">
            <div className="flex justify-between items-center">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2 md:font-semibold"
                  htmlFor="email"
               >
                  Email
               </label>
               <samp className="text-red-500 text-xs italic">{userEmailError}</samp>
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:mb-2"
               id="email"
               type="text"
               placeholder="Enter your email"
               value={userEmail}
               onChange={(event) => setUserEmail(event.target.value)}
            />
         </div>
         <div className="mb-3 md:mb-1">
            <div className="flex justify-between items-center">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2 md:font-semibold"
                  htmlFor="current-password"
               >
                  Password
               </label>
               <samp className="text-red-500 text-xs italic">{userPasswordError}</samp>
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline md:mb-2"
               id="current-password"
               type="current-password"
               placeholder="Enter your password"
               value={userPassword}
               onChange={(event) => setUserPassword(event.target.value)}
            />
         </div>
         <div className="flex justify-start items-start mb-4 w-full">
            <samp className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer md:font-semibold">
               Forgot Password?
            </samp>
         </div>
         <div className="flex items-center justify-center flex-col w-full">
            <LongBtn text="Login" />
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm">Don't have an account?&nbsp;</samp>
               <Link
                  to="/signup"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer md:font-semibold"
               >
                  Signup
               </Link>
            </div>
         </div>
      </form>
   );
}
