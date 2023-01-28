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
   };

   // console.log(allTodo);
   return (
      <main>
         <DragDropContext onDragEnd={() => {}}>
            <Header />
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList
               allTodo={allTodo}
               setAllTodo={setAllTodo}
               completedTodo={completedTodo}
               setCompletedTodo={setCompletedTodo}
            />
         </DragDropContext>
      </main>
   );
}
