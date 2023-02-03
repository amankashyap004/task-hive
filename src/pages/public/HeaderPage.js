import React from "react";
import Header from "../../components/public/Header";
import UserProfilePage from "./UserProfilePage";

export default function HeaderPage() {
   const [isUserProfile, setIsUserProfile] = React.useState(false);
   const clickUserIcon = () => {
      console.log("click");
      setIsUserProfile(!isUserProfile);
   };
   return (
      <div>
         <Header onClick={clickUserIcon} />
         <UserProfilePage display={isUserProfile} />
      </div>
   );
}
