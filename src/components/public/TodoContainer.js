import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import firebaseIns from "../../configs/firebase";

export default function TodoContainer(props) {
   const [edit, setEdit] = useState(false);
   const [editTodo, setEditTodo] = useState(props.todo);

   const handleEdit = async (e, id) => {
      e.preventDefault();
      try {
         const docRef = doc(firebaseIns.db, `users/${localStorage.getItem("uid")}/todos`, id);
         await updateDoc(docRef, { todo: editTodo });
         console.log("Edit successfully");
      } catch (e) {
         console.error("Error: ", e);
      }
      props.setAllTodo(props.allTodo.filter((todo) => todo.id !== id));
      setEdit(false);
   };

   const handleDelete = async (id) => {
      try {
         await deleteDoc(doc(firebaseIns.db, `users/${localStorage.getItem("uid")}/todos`, id));
         console.log("Document successfully deleted!");
      } catch (e) {
         console.error("Error removing document: ", e);
      }
      props.setAllTodo(props.allTodo.filter((todo) => todo.id !== id));
   };

   const handleDone = async (id) => {
      const activeTodo = props.allTodo;
      const remActiveTodo = [];
      let todo = {};
      for (let i = 0; i < activeTodo.length; i++) {
         if (activeTodo[i].id === id) {
            activeTodo[i].isDone = true;
            todo = activeTodo[i];
         } else {
            remActiveTodo.push(activeTodo[i]);
         }
      }
      props.setAllTodo(remActiveTodo);
      props.setCompletedTodo((prev) => [...prev, todo]);
      const docRef = doc(firebaseIns.db, `users/${localStorage.getItem("uid")}/todos`, id);
      await updateDoc(docRef, todo);
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
               ) : (
                  <span className="font-bold text-base md:text-sm" type="text">
                     {props.todo}
                  </span>
               )}
               <div className="flex justify-center items-center">
                  <span
                     onClick={() => {
                        // if (!edit && !props.isDone) {
                        if (!edit) {
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
                  {!props.isDone && (
                     <span
                        onClick={() => handleDone(props.id)}
                        className="cursor-pointer text-xl px-1 active:text-green-200 hover:text-red-400"
                     >
                        <MdDone />
                     </span>
                  )}
               </div>
            </form>
         )}
      </Draggable>
   );
}
