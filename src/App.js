import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import LoginAndSignupPage from "./pages/public/LoginAndSignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
         </Routes>
      </BrowserRouter>
   );
}

export default App;
