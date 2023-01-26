import React from "react";
import TodoContainer from "./TodoContainer";

export default function TodoList(props) {
   return (
      <div>
         {props.allTodo.map((item) => (
            <TodoContainer todo={item.todo} />
         ))}
      </div>
   );
}
