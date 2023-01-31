import React from "react";
import SmallBtn from "../../utils/SmallBtn";
import { Link } from "react-router-dom";

export default function Info() {
   const todoInfos = [
      "1. Increases productivity by providing a clear and organized view of tasks.",
      "2. Enhances time management by helping prioritize and schedule tasks.",
      "3. Reduces stress by allowing for easier tracking of progress and deadlines.",
      "4. Improves accountability by allowing for easy monitoring of task completion.",
      "5. Enhances goal-setting by providing a visual representation of progress towards objectives.",
   ];
   const listItems = todoInfos.map((todoInfo, i) => <li key={i}>{todoInfo}</li>);
   return (
      <section className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8 md:pt-2 md:pb-6 md:px-4 md:rounded-b-lg">
         <samp>
            "Experience the power of organization with our updated To-Do List project, now featuring
            a convenient drag and drop feature. Reorder your tasks with ease and simplify your
            workload. Say goodbye to manual rearranging and hello to a more streamlined workflow."
         </samp>
         <div className="w-full h-[2px] bg-blue-800 my-2"></div>
         <samp className="font-extrabold md:font-bold">
            A To-Do List website is important because it:
         </samp>
         <ul className="text-sm leading-6">{listItems}</ul>
         <div className="flex justify-center items-center mt-12 md:mt-6">
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
