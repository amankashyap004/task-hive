import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Login
         </samp>
         <div className="mb-3">
            <div className="flex justify-between items-center">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
               </label>
               <samp className="text-red-500 text-xs italic">{userEmailError}</samp>
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email"
               type="text"
               placeholder="Enter your email"
               value={userEmail}
               onChange={(event) => setUserEmail(event.target.value)}
            />
         </div>
         <div className="mb-3">
            <div className="flex justify-between items-center">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="current-password"
               >
                  Password
               </label>
               <samp className="text-red-500 text-xs italic">{userPasswordError}</samp>
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
               id="current-password"
               type="current-password"
               placeholder="Enter your password"
               value={userPassword}
               onChange={(event) => setUserPassword(event.target.value)}
            />
         </div>
         <div className="flex justify-start items-start mb-4 w-full">
            <samp className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
               Forgot Password?
            </samp>
         </div>
         <div className="flex items-center justify-center flex-col w-full">
            <button
               className="bg-blue-500 text-white py-3 font-bold w-full text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               type="submit"
            >
               Login
            </button>
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm">Don't have an account?&nbsp;</samp>
               <Link
                  to="/signup"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
               >
                  Signup
               </Link>
            </div>
         </div>
      </form>
   );
}
