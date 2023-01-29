import React from "react";
import Login from "../../components/public/Login";
import LoginAndSignupPage from "./LoginAndSignupPage";

export default function LoginPage() {
   return <LoginAndSignupPage page={<Login />} />;
}
