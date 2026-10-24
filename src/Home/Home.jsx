import React from "react";
import "./Home.css";
import profileImage from "./profile.jpg";  

function Home() {
  return (
    <div className="home-container">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>

      <div className="home-content">
        <h1>
          Hello, I'm <span>Durga Venkata Ganesh</span> 👋
        </h1>
        <p className="home-subtitle">
          <strong>Generative AI & Agentic Systems Engineer</strong> specializing in
          autonomous LLM architectures, <strong>Model Context Protocol (FastMCP)</strong> servers,
          and production-grade <strong>RAG pipelines</strong> with zero hallucination tolerance.
        </p>
        <div className="home-buttons">
          <a href="#projects" className="home-btn primary-btn">Explore AI Projects</a>
          <a href="#contact" className="home-btn secondary-btn">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
