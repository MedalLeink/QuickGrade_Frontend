import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LaunchScreen from "./pages/LaunchScreen";
import SignInPage from "./pages/SignInPage";
import ForgetPassword from "./pages/forgetPassword";
import EnrolledCourses from "./pages/EnrolledCourses";
import ResetPassword from "./pages/resetPassword"

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/StudentDashboard" element={<StudentDashboard />}/>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar name={"22/23/07/019"} />} />
        <Route path="/EnrolledCourses" element={<EnrolledCourses />} />
      </Routes>
    </Router>
  );
};

export default App;