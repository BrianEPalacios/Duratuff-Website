import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import School from "./pages/School";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
