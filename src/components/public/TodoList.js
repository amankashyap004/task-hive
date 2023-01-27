import React from "react";
import TodoContainer from "./TodoContainer";

export default function TodoList(props) {
   return (
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
   );
}
