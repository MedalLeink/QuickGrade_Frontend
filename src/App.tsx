import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LaunchScreen from "./pages/LaunchScreen";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/SignInPage" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
