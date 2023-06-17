import React from "react";
import "./App.css";
import HeaderPage from "./pages/public/HeaderPage";
import HomePage from "./pages/public/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
import InfoPage from "./pages/public/InfoPage";
import firebaseApp from "./configs/firebase";

function App() {
   return (
      <BrowserRouter basename="task-hive">
         <HeaderPage />
         <Routes>
            <Route path={`/`} element={<InfoPage />} />
            <Route path={`/home`} element={<HomePage />} />
            <Route path={`/login`} element={<LoginPage />} />
            <Route path={`/signup`} element={<SignupPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
