import React from "react";

export default function LongBtn(props) {
   return (
      <button
         className="bg-blue-500 text-white py-3 font-bold w-full text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
         type="submit"
      >
         {props.text}
      </button>
   );
}
