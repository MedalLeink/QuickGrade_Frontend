import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Modal from "./components/Modal";


//add the path and components to the element, you may remove the fragment

const App = () => {
  return (
    // <>
    <Router>
          <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar name={"22/23/07/019"} />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/button" element={<Button text={"white"} bg={"blue"} title="Submit"/>} />
          </Routes>
    </Router>
    // </>
  );
};

export default App;