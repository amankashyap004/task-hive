import React from "react";
import Info from "../../components/public/Info";
import LoginAndSignupPage from "./LoginAndSignupPage";

export default function InfoPage() {
   console.log("hello");
   return <LoginAndSignupPage page={<Info />} />;
}
