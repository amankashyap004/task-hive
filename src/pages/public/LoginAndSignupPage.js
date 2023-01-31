import React from "react";

export default function LoginAndSignupPage(props) {
   return (
      <section className="relative top-16 flex justify-center items-center md:top-14">
         <div className="w-full relative top-8 flex justify-center items-center md:top-6">
            <div className="flex justify-start items-start w-[70%] bg-cyan-100 rounded-lg md:w-[95%] md:flex-col md:mb-6">
               <div className="w-[50%] rounded-l-lg md:w-full md:h-[300px] md:rounded-l-none md:rounded-t-lg">
                  {/* <img src="/images/Login.jpg" /> */}
               </div>
               <div className="w-[50%] md:w-full">{props.page}</div>
            </div>
         </div>
      </section>
   );
}
