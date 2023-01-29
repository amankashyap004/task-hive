import React from "react";
import Login from "../../components/public/Login";

export default function LoginAndSignupPage() {
   return (
      <section className="relative top-16 flex justify-center items-center">
         <div className="w-full relative top-16 flex justify-center items-center">
            <div className="flex justify-start items-start w-[70%] bg-cyan-100 rounded-lg">
               <div className="w-[50%] bg-red-800 rounded-l-lg">
                  {/* <img src="/images/Login.jpg" /> */}
               </div>
               <div className="w-[50%] ">
                  <Login />
               </div>
            </div>
         </div>
      </section>
   );
}