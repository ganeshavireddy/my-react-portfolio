import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaRobot } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon"><FaRobot /></span>
          <span className="logo-text">Ganesh<span className="logo-accent">.ai</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="nav-item mobile-cta">
            <a
              href="https://github.com/ganeshavireddy"
              target="_blank"
              rel="noreferrer"
              className="nav-cta-btn"
              onClick={closeMenu}
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>

        {/* Right CTA on Desktop */}
        <div className="navbar-right">
          <a
            href="https://github.com/ganeshavireddy"
            target="_blank"
            rel="noreferrer"
            className="nav-cta-btn desktop-cta"
          >
            <FaGithub /> GitHub
          </a>

          {/* Mobile Hamburger Toggle */}
          <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}
