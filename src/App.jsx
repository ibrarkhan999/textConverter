import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Contact from "./components/Contact"
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [mode, setMode] = useState("light");

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "Dark Mode On";
      setTimeout(() => {
        document.title = "Text-Utils";
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Light Mode";
      setTimeout(() => {
        document.title = "Text-Utils";
      }, 1000);
    }
  };

  // Background Color Functions
  const yellowF = () => {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
  };
  const redF = () => {
    document.body.style.backgroundColor = "red";
  };
  const greenF = () => {
    document.body.style.backgroundColor = "green";
  };
  const blueF = () => {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
  };
  
  return (


    <Router>
      {/* Navbar should be outside Routes */}
      <Navbar
        title="UtilsText"
        yellowF={yellowF}
        redF={redF}
        blueF={blueF}
        greenF={greenF}
        darkMode={darkMode}
        about="About"
        home="Home"
        contact="Contact"
      />
    
    
        <Routes>
    
          <Route path="/" element={<TextForm heading='Enter The Text To Analyze'/>} />
          <Route path="/utils" element={<TextForm heading="Enter The Text To Analyze" />} />
          <Route path="/about" element={<About darkMode = {darkMode}/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>




    </Router>
  );
}

export default App;
