import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Java", level: 75 },
    { name: "React.js", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
