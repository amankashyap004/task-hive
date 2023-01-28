import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState } from "react";

export default function TodoContainer(props) {
   const [edit, setEdit] = useState(false);
   const [editTodo, setEditTodo] = useState(props.todo);

   const handleEdit = (e, id) => {
      e.preventDefault();
      props.setAllTodo(
         props.allTodo.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
      setEdit(false);
   };

   const handleDelete = (id) => {
      props.setAllTodo(props.allTodo.filter((todo) => todo.id !== id));
   };

   const handleDone = (id) => {
      props.setAllTodo(
         props.allTodo.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
      );
   };

   return (
      <form
         onSubmit={(e) => handleEdit(e, props.id)}
         className="bg-indigo-800 text-white w-full rounded-xl p-4 flex items-center justify-between m-4"
      >
         {edit ? (
            <input
               value={editTodo}
               onChange={(e) => setEditTodo(e.target.value)}
               className="w-[85%] p-2 outline-none rounded bg-transparent border-dashed border-2 border-slate-100"
            />
         ) : props.isDone ? (
            <s className="font-bold" type="text">
               {props.todo}
            </s>
         ) : (
            <span className="font-bold" type="text">
               {props.todo}
            </span>
         )}
         <div className="flex justify-center items-center">
            <span
               onClick={() => {
                  if (!edit && !props.isDone) {
                     setEdit(!edit);
                  }
               }}
               className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400"
            >
               <AiFillEdit />
            </span>
            <span
               onClick={() => handleDelete(props.id)}
               className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400"
            >
               <AiFillDelete />
            </span>
            <span
               onClick={() => handleDone(props.id)}
               className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400"
            >
               <MdDone />
            </span>
         </div>
      </form>
   );
}
