import React from "react";

export default function SmallBtn(props) {
   return (
      <section className="flex items-center justify-center mx-2">
         <button
            className={`flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out md:px-3 md:py-2`}
         >
            {props.text}
         </button>
      </section>
   );
}
