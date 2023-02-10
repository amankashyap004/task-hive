import React, { useEffect, useState } from "react";
import Header from "../../components/public/Header";
import UserProfilePage from "./UserProfilePage";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function HeaderPage() {
   const [isUserProfile, setIsUserProfile] = useState(false);

   const clickUserIcon = () => {
      setIsUserProfile(!isUserProfile);
   };

   // const handleClickOutside = () => {
   //    setIsUserProfile(false);
   // };

   // const handleWindowScroll = () => {
   //    setIsUserProfile(false);
   // };

   // useEffect(() => {
   //    document.addEventListener("mousedown", handleClickOutside);
   //    window.addEventListener("scroll", handleWindowScroll);

   //    return () => {
   //       document.removeEventListener("mousedown", handleClickOutside);
   //       window.removeEventListener("scroll", handleWindowScroll);
   //    };
   // }, []);

   const auth = getAuth();
   const navigate = useNavigate();

   const [userId, setUserId] = useState("");
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user) {
            setUserId(user.uid);
            localStorage.setItem("uid", user.uid);
         } else setUserId("-");
         if (user) {
            setUserName(user.displayName);
         } else setUserName("-");
         if (user) {
            setUserEmail(user.email);
         } else setUserEmail("-");

         if (user) {
            navigate("/home");
         } else {
            navigate("/");
         }
      });
   }, []);

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
