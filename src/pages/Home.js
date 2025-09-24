import React from "react";
import { RxFontSize } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h2>Hi, I am Roshan Kumar</h2>
      <p>“Software Development Engineer with 3+ years of experience building scalable, secure solutions in Java, C/C++, and AWS. Passionate about cybersecurity, problem-solving, and designing high-performance, cloud-native systems.”</p>
      <Link to="/projects" className="btn">View Projects</Link>
    </section>
  );
}
