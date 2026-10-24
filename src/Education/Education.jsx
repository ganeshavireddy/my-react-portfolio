import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sri Venkateswara College of Engineering Technology, Chittoor",
      year: "2022 – 2026",
      grade: "CGPA: 8.15",
      details: "Focus: Artificial Intelligence, Data Structures, Distributed Systems & Database Systems"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      year: "2020 – 2022",
      grade: "Score: 67%",
      details: "Core: Mathematics, Physics, Chemistry"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "High School, Narayanapuram",
      year: "2019 – 2020",
      grade: "Score: 85%",
      details: "State Board of Secondary Education"
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <div className="edu-meta">
              <span className="year">{edu.year}</span>
              <span className="grade-badge">{edu.grade}</span>
            </div>
            {edu.details && <p className="edu-details">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
