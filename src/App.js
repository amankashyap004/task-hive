import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import LoginAndSignupPage from "./pages/public/LoginAndSignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
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
                     <LoginPage />
                  </div>
               }
            />
            <Route
               path={`/signup`}
               element={
                  <div>
                     <Header />
                     <SignupPage />
                  </div>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
