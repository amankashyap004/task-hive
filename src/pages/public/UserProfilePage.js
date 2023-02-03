import React from "react";
import UserProfile from "../../components/public/UserProfile";

export default function UserProfilePage(props) {
   return (
      <div className={props.display ? "block" : "hidden"}>
         <UserProfile userId={props.userId} userName={props.userName} userEmail={props.userEmail} />
      </div>
   );
}
