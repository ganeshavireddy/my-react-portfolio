import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./contact.css";

export default function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-options">
        <a href="mailto:your.ganeshavireddy@email.com" className="contact-btn">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+91 7993899836" className="contact-btn">
          <FaPhone /> Call
        </a>
        <a href="https://www.linkedin.com/in/ganesh-avireddy-51895a353/" target="_blank" rel="noreferrer" className="contact-btn">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/ganeshavireddy" target="_blank" rel="noreferrer" className="contact-btn">
          <FaGithub /> GitHub
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="contact-btn">
          <FaTwitter /> Twitter
        </a>
      </div>
    </section>
  );
}
