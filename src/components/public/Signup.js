import React, { useState } from "react";
import { Link } from "react-router-dom";
import LongBtn from "../../utils/LongBtn";
import InputUtils from "../../utils/InputUtils";

export default function Signup() {
   const [state, setState] = useState({
      fullName: "",
      email: "",
      phone: "",
      currentPassword: "",
      confirmPassword: "",
   });

   const [errors, setErrors] = useState({
      fullName: "",
      email: "",
      phone: "",
      currentPassword: "",
      confirmPassword: "",
      doNotMatch: "",
   });

   const handleChange = (event) => {
      setState({ ...state, [event.target.id]: event.target.value });
      setErrors({ ...errors, [event.target.id]: "" });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      let hasErrors = false;

      if (!state.fullName) {
         setErrors({ ...errors, fullName: "Full Name is required" });
         hasErrors = true;
      }
      if (!state.email) {
         setErrors({ ...errors, email: "Email is required" });
         hasErrors = true;
      }
      if (!state.phone) {
         setErrors({ ...errors, phone: "Phone is required" });
         hasErrors = true;
      }
      if (!state.currentPassword) {
         setErrors({ ...errors, currentPassword: "Password is required" });
         hasErrors = true;
      }
      if (!state.confirmPassword) {
         setErrors({
            ...errors,
            confirmPassword: "Password is required",
         });
         hasErrors = true;
      }

      if (state.currentPassword !== state.confirmPassword) {
         setErrors({ ...errors, doNotMatch: "Passwords do not match" });
         hasErrors = true;
      }
      console.log(errors.doNotMatch);

      if (!hasErrors) {
         console.log("Full Name:", state.fullName);
         console.log("Email:", state.email);
         console.log("Phone:", state.phone);
         console.log("Current Password:", state.currentPassword);
         console.log("Confirm Password:", state.confirmPassword);
         setState({
            fullName: "",
            email: "",
            phone: "",
            currentPassword: "",
            confirmPassword: "",
         });
      }
   };

   return (
      <form
         className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8 md:pt-2 md:pb-6 md:px-4 md:rounded-b-lg"
         onSubmit={handleSubmit}
      >
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Signup
         </samp>
         <InputUtils
            htmlFor={"fullName"}
            labelTitle={"Full Name"}
            errorsName={errors.fullName}
            id={"fullName"}
            type={"text"}
            placeholder={"Enter your full name"}
            value={state.fullName}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor={"phone"}
            labelTitle={"Phone"}
            errorsName={errors.phone}
            id={"phone"}
            type={"text"}
            placeholder={"Enter your phone number"}
            value={state.phone}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor={"email"}
            labelTitle={"Email"}
            errorsName={errors.email}
            id={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={state.email}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor={"currentPassword"}
            labelTitle={"Password"}
            errorsName={errors.currentPassword}
            id={"currentPassword"}
            type={"password"}
            placeholder={"Enter your password"}
            value={state.currentPassword}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor={"confirmPassword"}
            labelTitle={"Confirm Password"}
            errorsName={errors.confirmPassword}
            id={"confirmPassword"}
            type={"password"}
            placeholder={"Enter your password"}
            value={state.confirmPassword}
            onChange={handleChange}
         />
         <div className="flex items-center justify-center flex-col w-full">
            <LongBtn text="Signup" />
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm md:font-semibold">
                  Already have an account?&nbsp;
               </samp>
               <Link
                  to="/login"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer md:font-semibold"
               >
                  Login
               </Link>
            </div>
         </div>
      </form>
   );
}
