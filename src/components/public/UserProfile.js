import React from "react";
import SmallBtn from "../../utils/SmallBtn";

export default function UserProfile(props) {
   return (
      <main className="absolute top-20 right-4 bg-slate-700 px-6 py-6 rounded-md z-10">
         <section className="flex justify-center items-center flex-col">
            <div className="bg-blue-100 rounded-full flex justify-center items-center h-[6rem] w-[6rem]">
               <h1 className="text-[5rem]">A</h1>
            </div>
            <div className="py-4 px-8 my-4 flex justify-start items-center bg-sky-200 rounded">
               <div className="pr-2 text-blue-900">
                  <h2 className="font-bold">Your id:</h2>
                  <h2 className="font-bold">Name:</h2>
                  <h2 className="font-bold">Phone:</h2>
                  <h2 className="font-bold">Email:</h2>
                  <p></p>
               </div>
               <div className="text-blue-900 ">
                  <p className="font-font-medium">-</p>
                  <p className="font-font-medium">{props.userName}</p>
                  <p className="font-font-medium">-</p>
                  <p className="font-font-medium text-sm">example@email.com </p>
               </div>
            </div>
            <div className="flex justify-center items-center mt-2">
               <SmallBtn text="Log out" bgColor="blue" />
               <SmallBtn text="Delete" bgColor="red" />
            </div>
         </section>
      </main>
   );
}
