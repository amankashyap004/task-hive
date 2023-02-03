import React, { useEffect, useState } from "react";
import Header from "../../components/public/Header";
import UserProfilePage from "./UserProfilePage";
import { getAuth } from "firebase/auth";

export default function HeaderPage() {
   const [isUserProfile, setIsUserProfile] = useState(false);
   const clickUserIcon = () => {
      setIsUserProfile(!isUserProfile);
   };

   const auth = getAuth();
   const [userId, setUserId] = useState("");
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user) {
            setUserId(user.uid);
         } else setUserId("-");
         if (user) {
            setUserName(user.displayName);
         } else setUserName("-");
         if (user) {
            setUserEmail(user.email);
         } else setUserEmail("-");
      });
   }, []);

   console.log(userEmail);

   return (
      <div>
         <Header onClick={clickUserIcon} />
         <UserProfilePage
            display={isUserProfile}
            userId={userId}
            userName={userName}
            userEmail={userEmail}
         />
      </div>
   );
}
