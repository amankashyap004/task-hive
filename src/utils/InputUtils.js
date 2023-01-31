import React from "react";

export default function InputUtils(props) {
   return (
      <section className="mb-1">
         <div className="flex justify-between items-center">
            <label
               className="block text-gray-700 text-sm font-bold mb-2 md:font-semibold"
               htmlFor={props.htmlFor}
            >
               {props.labelTitle}
            </label>
            {props.errorsName && (
               <samp className="text-red-500 text-xs italic">{props.errorsName}</samp>
            )}
         </div>
         <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={props.id}
            type={props.type}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
         />
      </section>
   );
}
