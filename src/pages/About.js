import React from "react";
import "./css/About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">

          {/* Text */}
          <div className="about-text-container">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I’m a Software Development Engineer (Member Technical) at Broadridge, based in Bengaluru, with over 2 years of experience building scalable and reliable solutions for the financial services industry. I have a strong foundation in Java, C, C++, ASP.NET, and HTML, and I leverage cloud technologies such as AWS to design secure, high-performance systems. I enjoy solving complex problems, optimizing applications, and collaborating with cross-functional teams to deliver robust software.
            </p>

            <h2 className="section-subtitle">Looking Forward</h2>
            <p className="about-text">
              I am eager to explore opportunities in backend architecture or security engineering, focusing on building high-performance, cloud-native systems that are both secure and resilient. I aim to contribute to product reliability and scalability while continuously learning and growing in system design and leadership roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
