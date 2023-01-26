import React, { useState } from "react";
import Header from "../../components/public/Header";
import InputField from "../../components/public/InputField";
import TodoList from "../../components/public/TodoList";

export default function HomePage() {
   const [todo, setTodo] = useState("");
   const [allTodo, setAllTodo] = useState([]);

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
         <Header />
         <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
         <TodoList allTodo={allTodo} setAllTodo={setAllTodo} />
      </main>
   );
}
