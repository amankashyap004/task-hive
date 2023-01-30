import React, { useState } from "react";
import Header from "../../components/public/Header";
import InputField from "../../components/public/InputField";
import TodoList from "../../components/public/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

export default function HomePage() {
   const [todo, setTodo] = useState("");
   const [allTodo, setAllTodo] = useState([]);
   const [completedTodo, setCompletedTodo] = useState([]);

   const handleAdd = (e) => {
      e.preventDefault();
      if (todo) {
         setAllTodo([...allTodo, { id: Date.now(), todo, isDone: false }]);
      } else {
         setAllTodo([...allTodo]);
      }
      setTodo("");
   };

   // console.log(allTodo);
   const onDragEnd = (result) => {
      const { destination, source } = result;
      // console.log(result);
      if (!destination) {
         return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
         return;
      }

      let add = "";
      let active = allTodo;
      let complete = completedTodo;

      // Source Logic
      if (source.droppableId === "todoList") {
         add = active[source.index];
         active.splice(source.index, 1);
      } else {
         add = complete[source.index];
         complete.splice(source.index, 1);
      }

      // Destination Logic
      if (destination.droppableId === "todoList") {
         active.splice(destination.index, 0, add);
      } else {
         complete.splice(destination.index, 0, add);
      }

      setCompletedTodo(complete);
      setAllTodo(active);
   };

   return (
      <main>
         <DragDropContext onDragEnd={onDragEnd}>
            <Header />
            <section className="relative top-14">
               <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
               <TodoList
                  allTodo={allTodo}
                  setAllTodo={setAllTodo}
                  completedTodo={completedTodo}
                  setCompletedTodo={setCompletedTodo}
               />
            </section>
         </DragDropContext>
      </main>
   );
}
