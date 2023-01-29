import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import LoginAndSignupPage from "./pages/public/LoginAndSignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path={`/`}
               element={
                  <div>
                     <Header />
                     <LoginAndSignupPage />
                  </div>
               }
            />
            <Route
               path={`/home`}
               element={
                  <div>
                     <Header />
                     <HomePage />
                  </div>
               }
            />
            <Route
               path={`/login`}
               element={
                  <div>
                     <Header />
                     <Login />
                  </div>
               }
            />
            <Route
               path={`/signup`}
               element={
                  <div>
                     <Header />
                     <Signup />
                  </div>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
