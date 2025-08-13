import React from "react";
import "./Home.css";
import profileImage from "./profile.jpg"; // Your local image

function Home() {
  return (
    <div className="home-container">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>

      <div className="home-content">
        <h1>
          Hello, I'm <span>Ganesh</span> 👋
        </h1>
        <p>
          I’m a <strong>React.js Frontend Developer</strong> passionate about
          creating clean, user-friendly, and responsive web applications with a
          focus on elegant UI and smooth UX.
        </p>
      </div>
    </div>
  );
}

export default Home;
