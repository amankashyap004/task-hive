import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import firebaseIns from "../../configs/firebase";
import { async } from "@firebase/util";

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

   const handleDelete = async (id) => {
      try {
         await deleteDoc(doc(firebaseIns.db, "todos", id));
         console.log("Document successfully deleted!");
      } catch (e) {
         console.error("Error removing document: ", e);
      }
      props.setAllTodo(props.allTodo.filter((todo) => todo.id !== id));
   };

   const handleDone = async (id) => {
      const activeTodo = props.allTodo;
      let todo = {};
      for (let i = 0; i < activeTodo.length; i++) {
         if (activeTodo[i].id === id) {
            activeTodo[i].isDone = true;
            todo = {
               todo: activeTodo[i].todo,
               isDone: true,
            };
         }
      }
      const docRef = doc(firebaseIns.db, "todos", id);

      await updateDoc(docRef, todo);

      props.setAllTodo(activeTodo);
      console.log(activeTodo);
   };

   return (
      <Draggable draggableId={props.id.toString()} index={props.index}>
         {(provided, snapshot) => (
            <form
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               onSubmit={(e) => handleEdit(e, props.id)}
               className={`bg-indigo-800 text-white w-full rounded-xl p-4 m-3 flex items-start justify-between  hover:scale-[1.01] hover:shadow-[0px_0px_4px_rgba(0,0,0,0.9),0px_0px_4px_rgba(0,0,0,0.9)] transition-all ease-linear cursor-pointer ${
                  snapshot.isDragging ? "bg-indigo-600" : ""
               } md:p-3 md:m-2`}
            >
               {edit ? (
                  <input
                     value={editTodo}
                     onChange={(e) => setEditTodo(e.target.value)}
                     className="w-[85%] p-2 outline-none rounded bg-transparent border-dashed border-2 border-slate-100 text-base md:text-sm"
                  />
               ) : props.isDone ? (
                  <s className="font-bold text-base md:text-sm" type="text">
                     {props.todo}
                  </s>
               ) : (
                  <span className="font-bold text-base md:text-sm" type="text">
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
         )}
      </Draggable>
   );
}
