import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <p>
          Hello! I’m <span className="highlight">Durga Venkata Ganesh</span>, a passionate 
          and dedicated developer who loves building creative and user-friendly web applications. 
          I enjoy working with both frontend and backend technologies, and I’m always eager to 
          learn new tools, frameworks, and techniques.
        </p>
        <p>
          My goal is to create projects that not only work flawlessly but also 
          provide a great user experience. In my free time, I explore new tech 
          trends, work on personal projects, and contribute to open-source communities.
        </p>
      </div>
    </section>
  );
};

export default About;
