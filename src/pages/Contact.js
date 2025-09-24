import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./css/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          I’d love to connect with you. Reach out via LinkedIn or email.
        </p>

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
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </button>

          {/* Email */}
          <a href="mailto:amiroshankr@gmail.com">
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
