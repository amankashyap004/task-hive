import React from "react";
import Signup from "../../components/public/Signup";
import LoginAndSignupPage from "./LoginAndSignupPage";

export default function SignupPage() {
   return <LoginAndSignupPage page={<Signup />} />;
}
