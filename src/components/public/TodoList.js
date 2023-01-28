import React from "react";
import TodoContainer from "./TodoContainer";

export default function TodoList(props) {
   return (
      <section className="flex items-center justify-around">
         <div className="bg-green-300 w-[45%] rounded flex items-center justify-center flex-wrap">
            <samp className="flex items-center justify-center font-bold text-lg p-4">
               Active Task
            </samp>
            <div className="w-full flex items-center justify-center flex-wrap">
               {props.allTodo.map((item) => (
                  <TodoContainer
                     todo={item.todo}
                     key={item.id}
                     id={item.id}
                     isDone={item.isDone}
                     allTodo={props.allTodo}
                     setAllTodo={props.setAllTodo}
                  />
               ))}
            </div>
         </div>
         <div className="bg-red-300 w-[45%] rounded flex items-center justify-center flex-wrap">
            <samp className="flex items-center justify-center font-bold text-lg p-4">
               Completed Task
            </samp>
            <div className="w-full flex items-center justify-center flex-wrap">
               {props.allTodo.map((item) => (
                  <TodoContainer
                     todo={item.todo}
                     key={item.id}
                     id={item.id}
                     isDone={item.isDone}
                     allTodo={props.allTodo}
                     setAllTodo={props.setAllTodo}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
