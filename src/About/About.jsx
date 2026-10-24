import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <p>
          Hello! I’m <span className="highlight">Durga Venkata Ganesh Avireddy</span>, a
          Computer Science graduate specializing in <span className="highlight">Agentic AI architectures, Model Context Protocol (FastMCP)</span>, 
          and production-grade Large Language Model (LLM) systems.
        </p>
        <p>
          My engineering focus centers on bridging foundation models with deterministic software 
          systems. I build hybrid vector-sparse retrieval pipelines (Faiss HNSW + BM25), autonomous 
          tool-orchestration servers, and strict anti-hallucination guardrails to ensure AI applications 
          remain verifiable, fast, and grounded in truth.
        </p>
        <p>
          When architecting AI solutions, I prioritize rigorous quantitative evaluation (Recall@K, MRR, 
          and RAGAS metrics) and resilient microservices using Python, FastAPI, and Docker.
        </p>
        <div className="about-highlights">
          <div className="highlight-pill">🤖 Agentic Workflows & Tool Use</div>
          <div className="highlight-pill">⚡ FastMCP Server Architecture</div>
          <div className="highlight-pill">🔍 Grounded Hybrid RAG & Vector Search</div>
          <div className="highlight-pill">🛡️ Strict Anti-Hallucination Guardrails</div>
        </div>
      </div>
    </section>
  );
};

export default About;
