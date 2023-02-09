import React from "react";
import TodoContainer from "./TodoContainer";
import { Droppable } from "react-beautiful-dnd";

export default function TodoList(props) {
   return (
      <section className="flex items-start justify-around md:flex-col md:w-full md:items-center md:justify-center ">
         <Droppable droppableId="todoList">
            {(provided, snapshot) => (
               <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-green-300 w-[45%] rounded flex items-center justify-center flex-wrap ${
                     snapshot.isDraggingOver ? "bg-green-500" : ""
                  } md:w-[95%] md:mb-4`}
               >
                  <samp className="flex items-center justify-center font-bold text-lg p-4 md:p-2">
                     Active Task
                  </samp>
                  <div className="w-full flex items-center justify-center flex-wrap">
                     {props.allTodo.map((item, index) => (
                        <TodoContainer
                           index={index}
                           todo={item.todo}
                           key={item.id}
                           id={item.id}
                           isDone={item.isDone}
                           allTodo={props.allTodo}
                           setAllTodo={props.setAllTodo}
                           completedTodo={props.completedTodo}
                           setCompletedTodo={props.setCompletedTodo}
                        />
                     ))}
                     {provided.placeholder}
                  </div>
               </div>
            )}
         </Droppable>
         <Droppable droppableId="todoRemove">
            {(provided, snapshot) => (
               <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-red-300 w-[45%] rounded flex items-center justify-center flex-wrap ${
                     snapshot.isDraggingOver ? "bg-red-500" : ""
                  } md:w-[95%] md:mb-4`}
               >
                  <samp className="flex items-center justify-center font-bold text-lg p-4 md:p-2">
                     Completed Task
                  </samp>
                  <div className="w-full flex items-center justify-center flex-wrap">
                     {props.completedTodo.map((item, index) => (
                        <TodoContainer
                           index={index}
                           todo={item.todo}
                           key={item.id}
                           id={item.id}
                           isDone={item.isDone}
                           allTodo={props.completedTodo}
                           setAllTodo={props.setCompletedTodo}
                        />
                     ))}
                     {provided.placeholder}
                  </div>
               </div>
            )}
         </Droppable>
      </section>
   );
}
