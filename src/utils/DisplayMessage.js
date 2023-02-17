import React, { useState, useEffect } from "react";

export default function DisplayMessage(props) {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
         setVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
   }, [props.text]);

   return (
      <section className="flex justify-center items-center w-full absolute bottom-8">
         {visible && <p className="text-green-400">{props.text}</p>}
      </section>
   );
}
