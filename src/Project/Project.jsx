import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Video Downloader App",
    desc: "A responsive web app to download videos in multiple qualities with preview options.",
    tech: ["AI", "Html", "Css", "javascript"]
  },
  {
    title: "TFI (Telugu Film Industry) Website",
    desc: "A multi-page responsive website displaying movies, artists, and trailers with a modern UI.",
    tech: ["Html", "css", "javascript", "Bootstrap"]
  },
  {
    title: "E-Commerce Store",
    desc: "An online shopping platform with product search, filters, cart, and payment integration.",
    tech: ["Html", "css", "Javascript","bootstrap"]
  },
  {
    title: "Restaurant Landing Page",
    desc: "A visually appealing restaurant website with menu, gallery, and reservation form.",
    tech: ["React", "Tailwindcss",  "Responsive"]
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing skills, projects, and contact information.",
    tech: ["React", "CSS", "Responsive"]
  },
  {
    title: "Netflix Clone",
    desc: "A Netflix-like UI with movie browsing, trailer previews, and user authentication.",
    tech: ["Html", "Css", "bootstrap", "Javascript", "responsive"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
