import React from "react";
import SmallBtn from "../../utils/SmallBtn";

export default function Header() {
   return (
      <header className="w-full h-[10vh] p-4 bg-slate-900 flex justify-between items-center">
         <div className="ml-4">
            <h1 className="font-bold text-white">TODO LIST</h1>
         </div>
         <section className="mr-4 flex justify-between items-center">
            <SmallBtn text="Login" />
            <SmallBtn text="Sing up" />
         </section>
      </header>
   );
}
