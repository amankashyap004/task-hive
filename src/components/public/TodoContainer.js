import React from "react";

export default function TodoContainer(props) {
   return (
      <section className="bg-indigo-800 w-full rounded-xl p-4 flex items-center justify-between m-4">
         <h2 className="text-white font-bold" type="text">
            {props.todo}
         </h2>
      </section>
   );
}
