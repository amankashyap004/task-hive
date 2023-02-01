import React from "react";
import Login from "../../components/public/Login";
import LoginAndSignupPage from "./LoginAndSignupPage";
import { LoginImg } from "../../assets/images";

export default function LoginPage() {
   return <LoginAndSignupPage image={LoginImg} page={<Login />} />;
}
