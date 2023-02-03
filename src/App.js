import React from "react";
import "./App.css";
import Header from "./components/public/Header";
import HomePage from "./pages/public/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
import InfoPage from "./pages/public/InfoPage";
import firebaseApp from "./configs/firebase";
import UserProfilePage from "./pages/public/UserProfilePage";
function App() {
   const [isUserProfile, setIsUserProfile] = React.useState(false);
   const clickUserIcon = () => {
      console.log("click");
      setIsUserProfile(!isUserProfile);
   };

   return (
      <BrowserRouter basename="task-hive">
         <Header onClick={clickUserIcon} />
         <UserProfilePage display={isUserProfile} />
         <Routes>
            <Route
               path={`/`}
               element={
                  <div>
                     <InfoPage />
                  </div>
               }
            />
            <Route
               path={`/home`}
               element={
                  <div>
                     <HomePage />
                  </div>
               }
            />
            <Route
               path={`/login`}
               element={
                  <div>
                     <LoginPage />
                  </div>
               }
            />
            <Route
               path={`/signup`}
               element={
                  <div>
                     <SignupPage />
                  </div>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
