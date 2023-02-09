import React from "react";
import UserProfile from "../../components/public/UserProfile";

export default function UserProfilePage(props) {
   return (
      <div>
         {props.display && (
            <UserProfile
               userId={props.userId}
               userName={props.userName}
               userEmail={props.userEmail}
            />
         )}
      </div>
   );
}
