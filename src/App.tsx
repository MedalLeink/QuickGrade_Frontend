import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import Sidebar from "./components/StudentSidebar";
import Navbar from "./components/Navbar";
import LaunchScreen from "./pages/LaunchScreen";
import StudentSignIn from "./pages/StudentSignIn";
import ForgetPassword from "./pages/forgetPassword";
import EnrolledCourses from "./pages/EnrolledCourses";
import ResetPassword from "./pages/resetPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
       <ToastContainer />
       <Routes>
        <Route path="/StudentDashboard" element={<StudentDashboard />}/>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/studentsignin" element={<StudentSignIn />} />
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