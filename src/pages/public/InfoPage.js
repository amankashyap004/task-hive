import React from "react";
import Info from "../../components/public/Info";
import LoginAndSignupPage from "./LoginAndSignupPage";
import { InfoImg } from "../../assets/images";

export default function InfoPage() {
   return <LoginAndSignupPage image={InfoImg} page={<Info />} />;
}
