import React from "react";

export default function LoginAndSignupPage(props) {
   return (
      <section className="relative top-16 flex justify-center items-center md:top-14">
         <div className="w-full relative top-8 flex justify-center items-center md:top-6">
            <div className="flex justify-start items-center w-[70%] rounded-lg md:w-[95%] md:flex-col md:mb-6">
               <div className="w-[50%] flex justify-center items-center h-full p-4 rounded-l-lg md:w-full md:rounded-l-none md:rounded-t-lg">
                  <img src={props.image} className="flex justify-center items-center w-full" />
               </div>
               <div className="w-[50%] md:w-full">{props.page}</div>
            </div>
         </div>
      </section>
   );
}
