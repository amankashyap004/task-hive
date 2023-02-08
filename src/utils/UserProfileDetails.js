import React from "react";

export default function UserProfileDetails(props) {
   return (
      <div className=" flex justify-start items-center">
         <h3 className="font-bold text-blue-900">{props.heading}</h3>
         <samp className="pr-1">:</samp>
         <p className="font-medium text-blue-800">{props.para}</p>
      </div>
   );
}
