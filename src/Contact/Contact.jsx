import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./contact.css";

export default function ContactMe() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:ganeshavireddy@gmail.com" className="footer-link">
            <FaEnvelope /> ganeshavireddy@gmail.com
          </a>
          <a href="tel:+917993899836" className="footer-link">
            <FaPhone /> +91-7993899836
          </a>
          <span className="footer-link">
            <FaMapMarkerAlt /> Andhra Pradesh, India
          </span>
        </div>

        <div className="footer-column">
          <h3>Profiles & Repos</h3>
          <a
            href="https://www.linkedin.com/in/ganeshavireddy"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/ganeshavireddy"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <div className="footer-column">
          <h3>© 2026 Durga Venkata Ganesh Avireddy</h3>
          <p>Generative AI & Agentic Systems Engineer</p>
          <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginTop: "8px" }}>
            Building autonomous LLM tools, FastMCP servers & grounded RAG pipelines.
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form
          action="mailto:ganeshavireddy@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message or Project Inquiry" required />
          <button type="submit">Send Message ✉️</button>
        </form>
      </div>
    </footer>
  );
}
