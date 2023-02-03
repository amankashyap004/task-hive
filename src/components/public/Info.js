import React from "react";
import SmallBtn from "../../utils/SmallBtn";
import { Link } from "react-router-dom";

export default function Info() {
   const todoInfos = [
      "1. To-do list.",
      "2. Drag and drop functionality.",
      "3. Active/completed task tracking.",
      "4. Login/Signup process.",
      "5. Access to all previous tasks after logging in.",
      "7. User-friendly interface.",
      "8. Modify task feature.",
   ];
   const listItems = todoInfos.map((todoInfo, i) => <li key={i}>{todoInfo}</li>);
   return (
      <section className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8 md:pt-2 md:pb-6 md:px-4 md:rounded-t-none md:rounded-b-lg">
         <div className="text-justify text-base text-violet-900 leading-6 font-semibold">
            <samp className="font-itim">
               "Streamline your tasks with Task Hive, the ultimate task management solution. Say
               goodbye to manual rearranging and hello to increased productivity. Whether you're a
               busy professional or just seeking a better organization method, Task Hive is the
               solution you need. Don't wait, join the hive and never lose track of your progress
               again."
            </samp>
         </div>
         <div className="w-full h-[2px] bg-blue-800 my-2"></div>
         <samp className="font-extrabold md:font-bold">The features of Task Hive:</samp>
         <ul className="text-sm leading-6">{listItems}</ul>
         <div className="w-full h-[2px] bg-blue-800 my-2"></div>
         <div className="flex justify-center items-center mt-6 md:mt-4">
            <Link to="/login">
               <SmallBtn text="Login" bgColor="blue" />
            </Link>
            <Link to="/signup">
               <SmallBtn text="signup" bgColor="blue" />
            </Link>
         </div>
      </section>
   );
}
