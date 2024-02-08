import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LaunchScreen from "./pages/LaunchScreen";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/StudentDashboard" element={<StudentDashboard />}/>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar name={"22/23/07/019"} />} />
      </Routes>
    </Router>
  );
};

export default App;