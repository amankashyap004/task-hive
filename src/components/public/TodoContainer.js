import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export default function TodoContainer(props) {
   return (
      <section className="bg-indigo-800 text-white w-1/2 rounded-xl p-4 flex items-center justify-between m-4">
         <span className=" font-bold" type="text">
            {props.todo}
         </span>
         <div className="flex justify-center items-center">
            <span className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400">
               <AiFillEdit />
            </span>
            <span className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400">
               <AiFillDelete />
            </span>
            <span className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400">
               <MdDone />
            </span>
         </div>
      </section>
   );
}
