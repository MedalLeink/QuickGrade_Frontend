import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import Sidebar from "./components/StudentSidebar";
import Navbar from "./components/Navbar";
import LaunchScreen from "./pages/LaunchScreen";
import StudentSignIn from "./pages/StudentSignIn";
import ForgetPassword from "./pages/forgetPassword";
import EnrolledCourses from "./pages/EnrolledCourses";
import TakeExamInstructions from "./pages/TakeExamInstructions";
import TakeExamPage from "./pages/TakeExamPage";
import ResetPassword from "./pages/resetPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ResultScreen } from "./pages/ResultScreen";
import { ViewResultPage } from "./pages/ViewResultPage";
// import { ResultPage2 } from "./pages/ResultPage2";
// import { ResultPage3 } from "./pages/ResultPage3";
// import { ResultPage4 } from "./pages/ResultPage4";
// import { ResultPage5 } from "./pages/ResultPage5";
// import { ResultPage6 } from "./pages/ResultPage6";

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
        <Route path="/TakeExam" element={<TakeExamInstructions />} />
        <Route path="/TakeExamPage" element={<TakeExamPage />} />
        <Route path="/ResultScreen" element={<ResultScreen />} />
        <Route path="/ViewResultPage" element={<ViewResultPage darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} />
        {/* <Route path="/ResultPage2" element={<ResultPage2 darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} /> */}
        {/* <Route path="/ResultPage3" element={<ResultPage3 darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} /> */}
        {/* <Route path="/ResultPage4" element={<ResultPage4 darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} /> */}
        {/* <Route path="/ResultPage5" element={<ResultPage5 darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} /> */}
        {/* <Route path="/ResultPage6" element={<ResultPage6 darkMode={undefined} leftIcon={undefined} rightIcon={undefined} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;