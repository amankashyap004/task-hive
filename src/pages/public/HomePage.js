import React, { useState } from "react";
import InputField from "../../components/public/InputField";
import TodoList from "../../components/public/TodoList";
import { DragDropContext } from "react-beautiful-dnd";
import { collection, addDoc } from "firebase/firestore";
import firebaseIns from "../../configs/firebase";

export default function HomePage() {
   const [todo, setTodo] = useState("");
   const [allTodo, setAllTodo] = useState([]);
   const [completedTodo, setCompletedTodo] = useState([]);

   const handleAdd = async (e) => {
      e.preventDefault();
      if (todo) {
         const td = { id: Date.now(), todo, isDone: false };
         setAllTodo([...allTodo, td]);
         try {
            const docRef = await addDoc(collection(firebaseIns.db, "todos"), td);
            console.log("Document written with ID: ", docRef.id);
         } catch (e) {
            console.error("Error adding document: ", e);
         }
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
