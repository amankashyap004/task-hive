import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import LoginAndSignupPage from "./pages/public/LoginAndSignupPage";

function App() {
   return (
      <div>
         <Header />
         {/* <HomePage /> */}
         <LoginAndSignupPage />
      </div>
   );
}

export default App;
