import React from "react";

export default function InputField() {
   return (
      <section className="py-8 flex justify-center items-center w-full ">
         <form className=" bg-green-100 flex justify-center items-center w-2/4 rounded-full">
            <input
               type="text"
               placeholder="Enter a Todo"
               className="w-full px-6 py-3 outline-none bg-transparent "
            />
            <button
               type="submit"
               className="text-white font-bold px-4 py-3 h-full rounded-r-full bg-green-700 hover:bg-green-800 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out"
            >
               Submit
            </button>
         </form>
      </section>
   );
}
