import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";

//add the path and components to the element, you may remove the fragment

const App = () => {
  return (
    <>
    <Router>
          <Routes>
            <Route path="/StudentDashboard" element={<StudentDashboard />}/>
          </Routes>
    </Router>
    </>
  );
};

export default App;
