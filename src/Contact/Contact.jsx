import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "./contact.css";

export default function ContactMe() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:your.ganeshavireddy@email.com" className="footer-link">
            <FaEnvelope /> Email
          </a>
          <a href="tel:+917993899836" className="footer-link">
            <FaPhone /> Call
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Social</h3>
          <a
            href="https://www.linkedin.com/in/ganesh-avireddy-51895a353/"
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
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaTwitter /> Twitter
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-column">
          <h3>© 2025 Ganesh Avireddy</h3>
          <p>Crafted with 💜 in React</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form
          action="mailto:your.ganeshavireddy@email.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message" required />
          <button type="submit">Send ✉️</button>
        </form>
      </div>
    </footer>
  );
}
