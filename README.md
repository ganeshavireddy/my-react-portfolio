<div align="center">

# ⚡ Durga Venkata Ganesh Avireddy
### Generative AI & Agentic Systems Engineer

[![Portfolio](https://img.shields.io/badge/Live_Portfolio-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://my-react-portf-git-bdfb8a-durgavenkataganesh-avireddys-projects.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ganeshavireddy-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ganeshavireddy)
[![GitHub](https://img.shields.io/badge/GitHub-ganeshavireddy-181717?style=for-the-badge&logo=github)](https://github.com/ganeshavireddy)
[![Email](https://img.shields.io/badge/Email-ganeshavireddy%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ganeshavireddy@gmail.com)

<p align="center">
  A modern, high-performance portfolio engineered with <strong>React 19</strong> and <strong>Vite</strong>, showcasing production-grade <strong>Agentic AI architectures</strong>, <strong>Model Context Protocol (FastMCP)</strong> servers, and <strong>hybrid RAG pipelines</strong>.
</p>

[**🌐 Explore Live Site**](https://my-react-portf-git-bdfb8a-durgavenkataganesh-avireddys-projects.vercel.app/) • [**View Resume Highlights**](#-featured-projects) • [**Setup Guide**](#-getting-started)

</div>

---

## 🌟 Overview

This portfolio serves as the central showcase for my work as a **Generative AI Engineer**, bridging foundation models (Gemini, Claude, OpenAI) with deterministic backend infrastructure and autonomous tool calling systems.

### 🎯 Key Highlights
- **🤖 Agentic Tool Orchestration:** Implements standard **Model Context Protocol (FastMCP)** servers exposing autonomous tools and dynamic prompt templates for LLM clients (Claude Desktop, Cursor).
- **🔍 Hybrid Vector-Sparse Retrieval (RAG):** Combines dense **Faiss (HNSW / IndexFlat)** semantic embeddings with sparse **BM25** lexical matching via **Reciprocal Rank Fusion (RRF)**.
- **🛡️ AI Safety & Rigorous Evaluation:** Zero hallucination tolerance enforced by strict attribution guardrails, achieving **1.0 Recall@5** and **1.0 MRR**.
- **🎨 Glassmorphic Cosmic UI:** Deep black and glowing violet animated gradients, frosted-glass sticky navigation, and interactive progress metrics.
- **📱 Responsive & Performance-Optimized:** Built with React 19, custom CSS Grid/Flexbox layouts, and instant Vite sub-second HMR.

---

## 🚀 Featured Projects

### 1. **CineRAG: Agentic Semantic Search & FastMCP Server**
> **Tech:** Python, FastMCP, Faiss (HNSW), BM25, FastAPI, Docker, Gemini API  
- Engineered an Agentic Model Context Protocol (FastMCP) server over `stdio` exposing 5 autonomous tools for LLMs.
- Combined dense vector embeddings (`all-MiniLM-L6-v2`) and sparse BM25 token matching with Reciprocal Rank Fusion (RRF).
- Built automated evaluation suites achieving **1.0 Recall@5** and **1.0 MRR** with deterministic anti-hallucination guardrails.

### 2. **Autonomous Telemetry & Operations Copilot**
> **Tech:** Python, Gemini API, LangChain, Pandas, SQL, Docker  
- Autonomous log triage and natural language Text-to-SQL copilot analyzing high-volume operational metrics.
- Implemented schema constraint validation and automated incident root-cause diagnosis, cutting triage time by **65%**.

### 3. **Multi-Agent Research & Fact-Verification Graph**
> **Tech:** LangGraph, Python, Pydantic, Self-RAG, Streamlit  
- Cyclical multi-agent system executing autonomous web research, citation extraction, and structured Pydantic report generation with Self-RAG reflection loops.

### 4. **Enterprise Multi-Modal Document RAG Pipeline**
> **Tech:** Python, Sentence-Transformers, ChromaDB, FastAPI, PyTorch  
- Production document intelligence pipeline indexing complex tables, charts, and text from technical PDFs with cross-encoder re-ranking.

---

## 🛠️ Technical Skills Architecture

| Domain | Key Technologies |
| :--- | :--- |
| **Agentic AI & LLMs** | Model Context Protocol (FastMCP), LangGraph, LangChain, ReAct Loops, Tool Calling, Claude API, Gemini API, Pydantic |
| **RAG & Vector Retrieval** | Faiss (IndexFlat, HNSW), BM25, Reciprocal Rank Fusion (RRF), Sentence-Transformers, Chunking, Re-ranking |
| **AI Safety & Evaluation** | Recall@5, MRR Benchmarking, RAGAS Triad, Grounding Verification, Strict Citation Attribution, Guardrails |
| **Backend & Systems** | Python (AsyncIO), FastAPI, RESTful APIs, Docker, SQL (PostgreSQL, SQLite), Pandas, NumPy, Linux, Git |
| **Frontend & UI** | React 19, JavaScript (ES6+), Vite, CSS3 Animations, Responsive Design |

---

## 📂 Project Architecture

```plaintext
my-react-portfolio/
├── public/                 # Static assets & icons
├── src/
│   ├── assets/             # SVGs and project media
│   ├── Navbar/             # Glassmorphic responsive navigation with mobile drawer
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Home/               # Hero section with animated gradient & profile
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── profile.jpg
│   ├── About/              # Background, philosophy & Gen AI focus areas
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Skills/             # Categorized 4-pillar skills matrix & progress bars
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── Project/            # Featured AI & software engineering projects
│   │   ├── Project.jsx
│   │   └── Project.css
│   ├── Education/          # Academic background (B.Tech CSE - 8.15 CGPA)
│   │   ├── Education.jsx
│   │   └── Education.css
│   ├── Contact/            # Footer, contact form & social channels
│   │   ├── Contact.jsx
│   │   └── contact.css
│   ├── App.jsx             # Main container component
│   ├── App.css             # Global smooth-scrolling & layout resets
│   └── main.jsx            # React root entry point
├── index.html              # HTML shell & SEO meta configuration
├── vite.config.js          # Vite build configuration
└── package.json            # Project dependencies & scripts
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.0 or later)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ganeshavireddy/my-react-portfolio.git
   cd my-react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Name:** Durga Venkata Ganesh Avireddy
- **Email:** [ganeshavireddy@gmail.com](mailto:ganeshavireddy@gmail.com)
- **LinkedIn:** [linkedin.com/in/ganeshavireddy](https://linkedin.com/in/ganeshavireddy)
- **GitHub:** [github.com/ganeshavireddy](https://github.com/ganeshavireddy)
- **Location:** Andhra Pradesh, India

---

<div align="center">
  <sub>Crafted with 💜 by Durga Venkata Ganesh Avireddy | Powered by React 19 & Vite</sub>
</div>
