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
         <div className="flex justify-center items-center">
            <section className="bg-neutral-500 p-4 w-[45%] m-8 rounded-xl flex justify-center items-center flex-col">
               <h2 className="font-bold text-2xl text-white">Todo List</h2>
               {allTodo.map((item, i) => (
                  <TodoList key={i} todo={item.todo} />
               ))}
            </section>
            <section className="bg-neutral-500 p-4 w-[45%] m-8 rounded-xl flex justify-center items-center flex-col">
               <h2 className="font-bold text-2xl text-white">Todo's Completed</h2>
               {allTodo.map((item, i) => (
                  <TodoList key={i} todo={item.todo} />
               ))}
            </section>
         </div>
      </main>
   );
}
