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
         <samp>
            "Get ready to take control of your tasks with Task Hive, the ultimate task management
            solution. With its intuitive to-do list, drag and drop functionality, and secure login
            process, you'll never lose track of your progress again. Whether you're a busy
            professional or just someone looking for a better way to stay organized, Task Hive is
            the answer. So why wait? Say goodbye to manual rearranging, Join the hive and watch your
            productivity soar!"
         </samp>
         <div className="w-full h-[2px] bg-blue-800 my-2"></div>
         <samp className="font-extrabold md:font-bold">The features of Task Hive:</samp>
         <ul className="text-sm leading-6">{listItems}</ul>
         <div className="flex justify-center items-center mt-6 md:mt-3">
            <Link to="/login">
               <SmallBtn text="Login" />
            </Link>
            <Link to="/signup">
               <SmallBtn text="signup" />
            </Link>
         </div>
      </section>
   );
}
