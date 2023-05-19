import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddJewelry from "./Components/Admin/AddJewelry";
import JewelryList from "./Components/user/JewelryList";
import JewelryAppoiment from "./Components/user/JewelryAppoiment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AddJewelry" element={<AddJewelry />} />
        <Route path="/JewelryList" element={<JewelryList />} />
        <Route path="/JewelryAppoiment" element={<JewelryAppoiment />} />
      </Routes>
    </Router>
  );
}

export default App;
