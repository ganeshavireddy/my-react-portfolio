import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "10th Class",
      institution: "High School, Narayanapuram",
      year: "Year of Completion: 2020",
      grade: "GPA: 8.5",
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Jr College, Taddepalligudem",
      year: "Year of Completion: 2022",
      grade: "Percentage: 68%",
    },
    {
      degree: "B.Tech",
      institution: "Sri Venkateswara College of Engineering Technology, Chittoor",
      year: "Graduating: 2026",
      grade: "CGPA: 7.95",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="education-heading">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="grade">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
