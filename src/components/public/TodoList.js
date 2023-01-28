import React from "react";
import TodoContainer from "./TodoContainer";
import { Droppable } from "react-beautiful-dnd";

export default function TodoList(props) {
   return (
      <section className="flex items-start justify-around">
         <Droppable droppableId="todoList">
            {(provided) => (
               <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  className="bg-green-300 w-[45%] rounded flex items-center justify-center flex-wrap"
               >
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
            )}
         </Droppable>
         <Droppable droppableId="todoRemove">
            {(provided) => (
               <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  className="bg-red-300 w-[45%] rounded flex items-center justify-center flex-wrap"
               >
                  <samp className="flex items-center justify-center font-bold text-lg p-4">
                     Completed Task
                  </samp>
                  <div className="w-full flex items-center justify-center flex-wrap">
                     {props.completedTodo.map((item) => (
                        <TodoContainer
                           todo={item.todo}
                           key={item.id}
                           id={item.id}
                           isDone={item.isDone}
                           allTodo={props.completedTodo}
                           setAllTodo={props.setCompletedTodo}
                        />
                     ))}
                  </div>
               </div>
            )}
         </Droppable>
      </section>
   );
}
