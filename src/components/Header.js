import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

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
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            style={{
              marginLeft: "6px",
              fontWeight: "800",
              fontSize: "20px",
              textDecoration: "none",
              letterSpacing: "0.6px",
              color: "var(--accent-start)"
            }}
          >
            RK
          </Link>
        </div>


        {/* Desktop nav */}
        <nav className="desktop-nav" role="navigation" aria-label="Main">
          <NavLink to="/" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Home</NavLink>
          <NavLink to="/experience" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Work</NavLink>
          <NavLink to="/education" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Education</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Projects</NavLink>
          <NavLink to="/profile" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Coding</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-link active':'nav-link'}>Contact</NavLink>
        </nav>

        {/* palette picker removed: coral is now the global theme */}

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
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              Coding Profile
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
