import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./css/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
       <h2
  style={{
    background: "linear-gradient(90deg, var(--accent-start, #ff8a00), var(--accent-end, #e52e71))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",

    fontSize: "clamp(30px, 5vw, 42px)",
    fontWeight: 700,
    marginBottom: "15px",
    paddingBottom: "55px",
    width: "100%",
    textAlign: "center",
    lineHeight: 1.1, // optional but improves balance
  }}
>
  Get in Touch
</h2>



        <p>I’d love to connect with you. Reach out via LinkedIn or email.</p>

        <div className="contact-links">

          {/* LinkedIn */}
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/roshan-kumar-a56240206",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <div className="icon-wrapper">
              <FaLinkedin className="icon" />
            </div>
            <span>LinkedIn</span>
          </button>

          {/* Email */}
          <a href="mailto:amiroshankr@gmail.com">
            <div className="icon-wrapper">
              <FaEnvelope className="icon" />
            </div>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
