import React from  "react";
// import '../css/App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home"
import { About } from "./About"
import { Appointments } from "./Appointments"
import { Contact } from "./Contact"
import { MyInfo } from "./MyInfo"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}>
        {/* <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} /> */}
      </Route>
      <Route path="/appointments" element={<Appointments />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Woops404 />}/>
    </Routes>
    </div>
  );
}

export default App;
