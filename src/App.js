import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Projects from "./Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() { 
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Education" element={<Education/>}/>
          </Routes>
        </div>
        <footer>&copy; 2025 Roshan Kumar. All rights reserved.</footer>
      </Router>
    </div>
  );
}

export default App;
