import React from "react";
import Signup from "../../components/public/Signup";
import LoginAndSignupPage from "./LoginAndSignupPage";
import { SignupImg } from "../../assets/images";

export default function SignupPage() {
   return <LoginAndSignupPage image={SignupImg} page={<Signup />} />;
}
