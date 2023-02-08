import React from "react";

export default function UserProfileDetails() {
   return (
      <div>
         <div className="pr-2 text-blue-900 flex justify-start items-center">
            <h2 className="font-bold">Your id:</h2>
            <p className="font-medium text-xs">id name</p>
         </div>
         {/* <div className="text-blue-900">
            <h2 className="font-bold">Name:</h2>
            <h2 className="font-bold">Phone:</h2>
            <h2 className="font-bold">Email:</h2>
            <p className="font-medium">{props.userName}</p>
            <p className="font-medium">-</p>
            <p className="font-medium text-sm">{props.userEmail}</p>
         </div> */}
      </div>
   );
}
