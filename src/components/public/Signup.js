import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LongBtn from "../../utils/LongBtn";
import InputUtils from "../../utils/InputUtils";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const initialState = {
   fullName: "",
   email: "",
   phone: "",
   currentPassword: "",
   confirmPassword: "",
};

const initialErrorsState = {
   fullName: "",
   email: "",
   phone: "",
   currentPassword: "",
   confirmPassword: "",
   doNotMatch: "",
};

export default function Signup() {
   const [state, setState] = useState(initialState);
   const [errors, setErrors] = useState(initialErrorsState);

   const navigate = useNavigate();

   const handleChange = (event) => {
      setState({ ...state, [event.target.id]: event.target.value });
      setErrors({ ...errors, [event.target.id]: "" });
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      let hasErrors = false;

      if (!state.fullName) {
         setErrors((pre) => ({ ...pre, fullName: "Full Name is required" }));
         hasErrors = true;
      }
      if (!state.email) {
         setErrors((pre) => ({ ...pre, email: "Email is required" }));
         hasErrors = true;
      }
      if (!state.phone) {
         setErrors((pre) => ({ ...pre, phone: "Phone is required" }));
         hasErrors = true;
      }
      if (!state.currentPassword) {
         setErrors((pre) => ({ ...pre, currentPassword: "Password is required" }));
         hasErrors = true;
      }
      if (!state.confirmPassword) {
         setErrors((pre) => ({ ...pre, confirmPassword: "Password is required" }));
         hasErrors = true;
      }

      if (state.currentPassword !== state.confirmPassword) {
         setErrors((pre) => ({ ...pre, doNotMatch: "Passwords do not match" }));
         hasErrors = true;
      }

      if (!hasErrors) {
         try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, state.email, state.currentPassword);
            const user = auth.currentUser;
            updateProfile(user, {
               displayName: state.fullName,
            });
            navigate("/home");
         } catch (error) {
            console.log(error.message);
         }
         console.log("Full Name:", state.fullName);
         console.log("Email:", state.email);
         console.log("Phone:", state.phone);
         console.log("Current Password:", state.currentPassword);
         console.log("Confirm Password:", state.confirmPassword);
         setState(initialState);
         setErrors(initialErrorsState);
      }
   };

   return (
      <form
         className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8 md:pt-2 md:pb-6 md:px-4 md:rounded-t-none md:rounded-b-lg"
         onSubmit={handleSubmit}
      >
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Signup
         </samp>
         <InputUtils
            htmlFor="fullName"
            labelTitle="Full Name"
            errorsName={errors.fullName}
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={state.fullName}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor="phone"
            labelTitle="Phone"
            errorsName={errors.phone}
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            value={state.phone}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor="email"
            labelTitle="Email"
            errorsName={errors.email}
            id="email"
            type="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor="currentPassword"
            labelTitle="Password"
            errorsName={errors.currentPassword}
            id="currentPassword"
            type="password"
            autoComplete="currentPassword"
            placeholder="Enter your password"
            value={state.currentPassword}
            onChange={handleChange}
         />
         <InputUtils
            htmlFor="confirmPassword"
            labelTitle="Confirm Password"
            errorsName={errors.confirmPassword}
            id="confirmPassword"
            type="password"
            autoComplete="confirmPassword"
            placeholder="Enter your password"
            value={state.confirmPassword}
            onChange={handleChange}
         />
         <div className="mb-3">
            <samp className="text-red-500 text-xs italic">{errors.doNotMatch}</samp>
         </div>
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
