import React from "react";

export default function InputField(props) {
   return (
      <section className="py-8 flex justify-center items-center w-full md:py-6">
         <form
            onSubmit={props.handleAdd}
            className=" bg-green-100 flex justify-center items-center w-2/4 rounded-full sm:w-[90%] md:w-[80%]"
         >
            <input
               type="text"
               value={props.todo}
               onChange={(e) => props.setTodo(e.target.value)}
               placeholder="Enter a Todo"
               className="w-full px-6 py-3 outline-none bg-transparent text-lg md:py-1 md:text-sm"
            />
            <button
               type="submit"
               className="text-lg  text-white font-bold px-4 py-3 h-full rounded-r-full bg-green-700 hover:bg-green-800 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out md:py-2 md:text-sm"
            >
               Submit
            </button>
         </form>
      </section>
   );
}
