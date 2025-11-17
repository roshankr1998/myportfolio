import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/Gemini_Generated_Image_i5rso0i5rso0i5rs.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const roles = [
    "Software Development Engineer",
    "Web Developer",
    "Competitive Programmer",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    const TYPING_SPEED = 120;
    const DELETING_SPEED = 70;
    const PAUSE_ON_FULL = 1800;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setDeleting(true), PAUSE_ON_FULL);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETING_SPEED);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <section className="home hero clean-hero">
      <div className="hero-inner container">
        <div className="hero-left">
            <h1 className="hero-title" style={{textAlign:'justify'}}>Hi, I am <span className="nameAccent">Roshan Kumar</span></h1>
            <div className="hero-role" aria-live="polite" style={{textAlign:'justify'}}>I'm a <strong>{text}</strong><span className="cursor">|</span></div>

            {/* Social icons below the role line */}
            <div style={{ display: 'flex', gap: '16px', margin: '18px 0 18px 0', justifyContent: 'flex-start' }}>
              <a
                href="https://www.linkedin.com/in/roshan-kumar-a56240206"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(90deg, var(--accent-start), var(--accent-end))',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  fontSize: '1.25em',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255,122,89,0.10)',
                  transition: 'background 0.2s',
                  border: 'none',
                  padding: 0
                }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/roshankr1998"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(90deg, var(--accent-start), var(--accent-end))',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  fontSize: '1.25em',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255,122,89,0.10)',
                  transition: 'background 0.2s',
                  border: 'none',
                  padding: 0
                }}
                tabIndex={0}
                onClick={e => { e.preventDefault(); window.open('https://github.com/roshankr1998', '_blank', 'noopener,noreferrer'); }}
              >
                <FaGithub />
              </a>
            </div>

            <p className="lead" style={{textAlign:'justify'}}>With 3+ years of experience building scalable, secure solutions in Java, C/C++, and AWS. I focus on clean architecture, secure systems, and measurable impact.</p>

            <div className="hero-ctas" style={{justifyContent:'flex-start'}}>
              <Link to="/projects" className="btn primary">View Projects</Link>
              <a href="/contact" className="btn outline">Contact</a>
            </div>
        </div>

        {/* Profile photo removed from homepage */}
      </div>
    </section>
  );
}
