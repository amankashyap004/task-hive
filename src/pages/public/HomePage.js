import React, { useState, useEffect } from "react";
import InputField from "../../components/public/InputField";
import TodoList from "../../components/public/TodoList";
import { DragDropContext } from "react-beautiful-dnd";
import { collection, addDoc, getDocs } from "firebase/firestore";
import firebaseIns from "../../configs/firebase";

export default function HomePage() {
   const [todo, setTodo] = useState("");
   const [allTodo, setAllTodo] = useState([]);
   const [completedTodo, setCompletedTodo] = useState([]);

   const handleAdd = async (e) => {
      e.preventDefault();
      if (todo) {
         const todoData = { todo, isDone: false };
         try {
            const docRef = await addDoc(collection(firebaseIns.db, "todos"), todoData);
            setAllTodo([...allTodo, { id: docRef.id, todo, isDone: false }]);
         } catch (error) {
            console.error("Error adding document: ", error);
         }
      }
      setTodo("");
   };

   const fetchData = async () => {
      try {
         const querySnapshot = await getDocs(collection(firebaseIns.db, "todos"));
         const todos = [];
         querySnapshot.forEach((doc) => {
            todos.push({ id: doc.id, ...doc.data() });
         });
         setAllTodo(todos);
      } catch (error) {
         console.error("Error getting documents: ", error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   useEffect(() => {
      fetchData();
   }, [allTodo, completedTodo]);

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
