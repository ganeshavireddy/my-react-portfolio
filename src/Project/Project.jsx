import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRobot } from "react-icons/fa";
import "./Project.css";

const projects = [
  {
    title: "CineRAG: Agentic Semantic Search & FastMCP Server",
    featured: "Featured Agentic Project",
    desc: "An Agentic Model Context Protocol (FastMCP) server over stdio exposing 5 autonomous tools and dynamic prompt templates for LLMs (Claude Desktop, Cursor). Features hybrid retrieval combining Faiss dense vector embeddings (all-MiniLM-L6-v2) and sparse BM25 via Reciprocal Rank Fusion (RRF) with anti-hallucination guardrails, achieving 1.0 Recall@5 and 1.0 MRR.",
    tech: ["FastMCP", "Python", "Faiss", "BM25", "FastAPI", "Docker", "RAG"],
    github: "https://github.com/ganeshavireddy",
    metrics: "1.0 Recall@5 | 1.0 MRR | 5 Autonomous Tools"
  },
  {
    title: "Autonomous Telemetry & Operations Copilot",
    featured: "LLM Operations Agent",
    desc: "An autonomous telemetry triage and natural language Text-to-SQL copilot for high-volume ride-hailing operational logs. Implements automated anomaly detection, schema constraints, and incident root-cause diagnosis, reducing diagnostic turnaround by 65%.",
    tech: ["Python", "Gemini API", "LangChain", "Pandas", "SQL", "Docker"],
    github: "https://github.com/ganeshavireddy",
    metrics: "Automated Root-Cause Analysis & Schema Validation"
  },
  {
    title: "Multi-Agent Research & Fact-Verification Graph",
    featured: "Agentic Workflow",
    desc: "A cyclical multi-agent system built with LangGraph to perform autonomous web research, citation extraction, multi-source verification, and structured Pydantic report generation with Self-RAG reflection loops.",
    tech: ["LangGraph", "Python", "Pydantic", "Self-RAG", "Streamlit"],
    github: "https://github.com/ganeshavireddy",
    metrics: "Cyclical Agent Loops & Structured JSON Outputs"
  },
  {
    title: "Enterprise Multi-Modal Document RAG Pipeline",
    featured: "Retrieval Architecture",
    desc: "Production document intelligence pipeline indexing complex tables, charts, and unstructured text from technical PDFs using dense embeddings, cross-encoder re-ranking, and strict attribution guardrails.",
    tech: ["Python", "Sentence-Transformers", "ChromaDB", "FastAPI", "PyTorch"],
    github: "https://github.com/ganeshavireddy",
    metrics: "Cross-Encoder Re-ranking & Strict Citations"
  },
  {
    title: "AI Clone & Persona Conversational Agent",
    featured: "Personalized LLM",
    desc: "Personalized conversational agent fine-tuned with in-context memory, system persona prompts, and voice synthesis to replicate real-time user communication style and personal knowledge base.",
    tech: ["Python", "Gemini API", "FastAPI", "Vector Search", "Streamlit"],
    github: "https://github.com/ganeshavireddy",
    metrics: "Long-Term Memory & Persona Conditioning"
  },
  {
    title: "Interactive GenAI Developer Portfolio",
    featured: "Interface & Showcase",
    desc: "Modern responsive web portfolio showcasing production Generative AI architectures, FastMCP tool integrations, and interactive benchmarks with an animated cosmic UI.",
    tech: ["React.js", "JavaScript", "Vite", "CSS3", "Responsive"],
    github: "https://github.com/ganeshavireddy/my-react-portfolio",
    metrics: "Vite + React 19 + Performance Optimized"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Featured AI & Engineering Projects</h2>
      <p className="projects-subheading">
        Real-world Agentic architectures, FastMCP servers, and high-precision RAG systems
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-badge-row">
              <span className="project-featured-badge">
                <FaRobot style={{ marginRight: "6px" }} /> {p.featured}
              </span>
            </div>

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              {p.metrics && (
                <div className="project-metrics">
                  ⚡ <strong>Benchmark:</strong> {p.metrics}
                </div>
              )}

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
