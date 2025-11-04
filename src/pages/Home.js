import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    // Slower typing & deleting for a calmer animation
    const TYPING_SPEED = 150; // ms per character while typing
    const DELETING_SPEED = 90; // ms per character while deleting
    const PAUSE_ON_FULL = 2000; // ms pause when a role is fully typed

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPING_SPEED);
      } else {
        // pause on full word
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
    <section className="home">
      <h1>
        Hi, I am <span className="nameAccent">Roshan</span> Kumar
        <br />
        <span className="role">I'm a {text}
          <span className="cursor">|</span>
        </span>
      </h1>

      <p>
        “ With 3+ years of experience building
        scalable, secure solutions in Java, C/C++, and AWS. Passionate about
        cybersecurity, problem-solving, and designing high-performance,
        cloud-native systems.”
      </p>

      <Link to="/projects" className="btn">
        View Projects
      </Link>
    </section>
  );
}
