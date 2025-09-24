import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // ref for mobile menu
  const burgerRef = useRef(null); // ref for hamburger

  // Close menu if click happens outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header>
      {/* Logo */}
    <div className="logo">
  <Link
    to="/"
    style={{
      marginLeft: "15px",
      fontWeight: "bold",
      fontSize: "40px",
      textDecoration: "none", // 🚀 removes underline
      color: "#38bdf8",
    }}
  >
    RK
  </Link>
</div>


      {/* Desktop nav */}
      <nav className="desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/experience">Work Experience</Link>
        <Link to="/education">Education & Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Hamburger for mobile */}
      <div
        className="hamburger"
        ref={burgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
          <Link to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
