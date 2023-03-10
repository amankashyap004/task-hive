import React from "react";
import SmallBtn from "../../utils/SmallBtn";
import SmallRedBtn from "../../utils/SmallRedBtn";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, deleteUser } from "firebase/auth";
import UserProfileDetails from "../../utils/UserProfileDetails";
import { FaRegUser } from "react-icons/fa";

export default function UserProfile(props) {
   const auth = getAuth();
   const navigate = useNavigate();

   const handleClick = () => {
      signOut(auth)
         .then(() => {
            // console.log("Sign-out successful.");
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const user = auth.currentUser;
   const handleDelete = () => {
      deleteUser(user)
         .then(() => {
            // console.log("Deleted successful.");
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <main className="fixed top-20 right-4 bg-slate-700 px-6 py-6 rounded-md z-10 md:top-16 md:right-2 md:p-3">
         <section className="flex justify-center items-center flex-col">
            <div className="bg-blue-100 rounded-full flex justify-center items-center h-[6rem] w-[6rem]">
               <h1 className="text-[3rem] uppercase font-medium">
                  <FaRegUser />
               </h1>
            </div>
            <div className="py-4 px-6 my-4 flex justify-start items-start flex-col bg-sky-200 rounded min-w-[200px] md:p-2">
               <UserProfileDetails heading="Your Id" para={props.userId} />
               <UserProfileDetails heading="Name" para={props.userName} />
               <UserProfileDetails heading="Phone" para="-" />
               <UserProfileDetails heading="Email" para={props.userEmail} />
            </div>
            <div className="flex justify-center items-center mt-2">
               <div onClick={handleClick}>
                  <SmallBtn text="Log out" />
               </div>
               <div onClick={handleDelete}>
                  <SmallRedBtn text="Delete" />
               </div>
            </div>
         </section>
      </main>
   );
}
