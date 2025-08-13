import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./contact.css";

export default function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-options">
        <a href="mailto:your.email@example.com" className="contact-btn">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+1234567890" className="contact-btn">
          <FaPhone /> Call
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-btn">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-btn">
          <FaGithub /> GitHub
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="contact-btn">
          <FaTwitter /> Twitter
        </a>
      </div>
    </section>
  );
}
