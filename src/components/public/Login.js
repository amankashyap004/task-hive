import React from "react";

export default function Login() {
   return (
      <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8">
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Login
         </samp>
         <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
               Email
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email"
               type="text"
               placeholder="Enter your email"
            />
         </div>
         <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
               id="password"
               type="password"
               placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
         </div>
         <div className="flex justify-start items-start mb-4 w-full">
            <samp className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
               Forgot Password?
            </samp>
         </div>
         <div className="flex items-center justify-center flex-col w-full">
            <button
               className="bg-blue-500 text-white py-3 font-bold w-full text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               type="button"
            >
               Login
            </button>
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm">Don't have an account?&nbsp;</samp>
               <a
                  href="#"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
               >
                  Signup
               </a>
            </div>
         </div>
      </form>
   );
}
