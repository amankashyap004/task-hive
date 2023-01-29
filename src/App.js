import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";

function App() {
   return (
      <div>
         <Header />
         {/* <HomePage /> */}
         <LoginPage />
      </div>
   );
}

export default App;
