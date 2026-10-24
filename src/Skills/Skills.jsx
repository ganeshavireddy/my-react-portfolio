import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: "Agentic AI & LLMs",
    icon: "🤖",
    skills: [
      "Model Context Protocol (FastMCP)",
      "LangGraph & LangChain",
      "Autonomous Tool Calling & ReAct",
      "Gemini API & Claude API",
      "Dynamic Prompt Engineering",
      "Structured Outputs (Pydantic)"
    ]
  },
  {
    category: "RAG & Vector Retrieval",
    icon: "🔍",
    skills: [
      "Faiss (IndexFlat, HNSW)",
      "BM25 Lexical Search",
      "Reciprocal Rank Fusion (RRF)",
      "Sentence-Transformers",
      "Semantic Chunking & Re-ranking",
      "Context Window Compression"
    ]
  },
  {
    category: "AI Safety & Evaluation",
    icon: "🛡️",
    skills: [
      "Recall@5 & MRR Benchmarking",
      "RAGAS Triad Evaluation",
      "Hallucination Guardrails",
      "Strict Source Attribution",
      "Grounding Verification",
      "Telemetry Anomaly Detection"
    ]
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    skills: [
      "Python (AsyncIO)",
      "FastAPI & RESTful APIs",
      "Docker Containerization",
      "SQL (PostgreSQL, SQLite, MySQL)",
      "Pandas & NumPy",
      "Git, GitHub & Linux"
    ]
  }
];

const coreProficiencies = [
  { name: "Python & LLM Orchestration", level: 95 },
  { name: "FastMCP & Agentic Tool Design", level: 92 },
  { name: "Hybrid RAG (Faiss + BM25)", level: 90 },
  { name: "FastAPI & Backend Microservices", level: 88 },
  { name: "AI Safety, Evaluation & Guardrails", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Technical Skills & Expertise</h2>
      <p className="skills-subheading">
        Engineered for scalable, hallucination-resistant Generative AI applications
      </p>

      {/* Grid of Categories */}
      <div className="skills-category-grid">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="category-card">
            <div className="category-header">
              <span className="category-icon">{group.icon}</span>
              <h3 className="category-title">{group.category}</h3>
            </div>
            <div className="skills-tags">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Progress Bars */}
      <div className="proficiency-section">
        <h3 className="proficiency-title">Core Domain Proficiency</h3>
        <div className="proficiency-container">
          {coreProficiencies.map((item, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <span className="skill-name">{item.name}</span>
                <span className="skill-level">{item.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
