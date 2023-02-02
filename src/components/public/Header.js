import React from "react";
import SmallBtn from "../../utils/SmallBtn";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
   return (
      <header className="w-full h-15 p-4 bg-slate-900 flex justify-between items-center fixed z-10 md:h-14 md:p-2">
         <div className="ml-4 md:ml-2 sm:ml-2">
            <Link to="/">
               <h1 className="font-bold text-white cursor-pointer">Task Hive</h1>
            </Link>
         </div>
         <section className="mr-4 flex justify-between items-center md:mr-2 sm:mr-1">
            <Link to="/home">
               <SmallBtn text="Home" />
            </Link>
            <div className="flex justify-center items-center bg-slate-50 p-1 rounded-full cursor-pointer">
               <FaUserCircle className="text-2xl" />
            </div>
         </section>
      </header>
   );
}
