import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LaunchScreen from "./pages/LaunchScreen";
import SignInPage from "./pages/SignInPage";
import ForgetPassword from "./pages/forgetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar name={"22/23/07/019"} />} />
      </Routes>
    </Router>
  );
};

export default App;