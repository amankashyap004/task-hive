import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
   return (
      <form className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8">
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Signup
         </samp>
         <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
               Full Name
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="full-name"
               type="text"
               placeholder="Enter your full name"
            />
         </div>
         <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
               Phone
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="phone"
               type="text"
               placeholder="Enter your phone number"
            />
         </div>
         <div className="mb-1">
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
         <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
               id="password"
               type="password"
               placeholder="******************"
            />
         </div>
         <div className="mb-1">
            <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="conform-password"
            >
               Conform Password
            </label>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
               id="conform-password"
               type="conform-password"
               placeholder="******************"
            />
         </div>
         <div className="flex items-center justify-center flex-col w-full">
            <button
               className="bg-blue-500 text-white py-3 font-bold w-full text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               type="button"
            >
               Signup
            </button>
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm">Already have an account?&nbsp;</samp>
               <Link
                  to="/login"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
               >
                  Login
               </Link>
            </div>
         </div>
      </form>
   );
}
