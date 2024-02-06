import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


//add the path and components to the element, you may remove the fragment

const App = () => {
  return (
    // <>
    <Router>
          <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar name={"22/23/07/019"} />} />
          </Routes>
    </Router>
    // </>
  );
};

export default App;