import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
import InfoPage from "./pages/public/InfoPage";
function App() {
   return (
      <BrowserRouter basename="">
         <Routes>
            <Route
               path={`/`}
               element={
                  <div>
                     <Header />
                     <InfoPage />
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
