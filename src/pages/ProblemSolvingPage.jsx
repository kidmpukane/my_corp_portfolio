import React from "react";

function ProblemSolvingPage() {
  return (
    <div className="about-me-container">
      <div className="personal-info-container">
        <div className="name-and-occupation">
          <a className="spec-header-l">LWANDISO ZWANE </a>
          <span>MACHINE LEARNING ENGINEER</span>
        </div>
        <div className="my-specs">
          <div className="spec-item-1">
            <a className="spec-header">Age:</a>
            <a> 26</a>
          </div>
          <div className="spec-item-2">
            <a className="spec-header">Location:</a>
            <a>South Africa (Mpumalanga, Witbank)</a>
          </div>
          <div className="spec-item-3">
            <a className="spec-header">Mobility:</a>
            <a>Open to relocation</a>
          </div>
        </div>
        <div className="my-bio">
          <a>
            Highly motivated and Certified Machine Learning Engineer
            specialising in Industrial AI, Reasoning Systems, and MLOps. Proven
            ability to design, architect, and deploy complex, modular
            microservice systems (FastAPI, Docker, AWS) for predictive
            maintenance and real-time anomaly detection. Focused on building
            auditable and scalable AI solutions, demonstrated through rigorous,
            self-directed projects (GridGuard, AVA) utilising multi-agent
            orchestration and modern RAG frameworks.
          </a>
        </div>
      </div>
      <div className="technologies-skills">
        <h2 className="ts-header">Technical Depth & Competencies</h2>

        {/* Machine Learning & AI */}
        <section className="skill-section">
          <h3 className="tech-stack-header">Machine Learning & AI</h3>

          <ul className="tech-col">
            <li>Predictive Maintenance</li>
            <li>Fault & Anomaly Detection</li>
            <li>Sequence Models (LSTM / Bi-LSTM)</li>
            <li>NLP Intent Parsing</li>
            <li>RAG Pipelines</li>
            <li>Agentic Reasoning</li>
            <li>Contextual Memory</li>
          </ul>

          <ul className="tech-col">
            <li>Feature Engineering</li>
            <li>Model Evaluation & Experiment Tracking</li>
            <li>Explainability (SHAP, LIME)</li>
            <li>Industrial AI Systems</li>
          </ul>
        </section>

        {/* Software Engineering & Backend */}
        <section className="skill-section">
          <h3 className="tech-stack-header">Software Engineering & Backend</h3>

          <ul className="tech-col">
            <li>Python, Node.js, FastAPI</li>
            <li>REST API Design</li>
            <li>Microservice Architecture</li>
            <li>Event-Driven Systems</li>
            <li>Async Pipelines</li>
          </ul>

          <ul className="tech-col">
            <li>CI/CD (GitHub Actions)</li>
            <li>Docker, Terraform</li>
            <li>SQL/NoSQL (PostgreSQL, MySQL)</li>
            <li>Logging & Observability (FTIR/FDIR Tracing)</li>
          </ul>
        </section>

        {/* Systems & Architecture */}
        <section className="skill-section">
          <h3 className="tech-stack-header">Systems & Architecture</h3>

          <ul className="tech-col">
            <li>Modular Reasoning Engines</li>
            <li>Pluggable Agent Architectures</li>
            <li>Event-Oriented, Data-Intensive Systems</li>
            <li>Distributed Systems Patterns</li>
          </ul>

          <ul className="tech-col">
            <li>Fault-Tolerant System Design</li>
            <li>API Gateways</li>
            <li>Schema Design & Versioning</li>
            <li>Scalable, Evolvable, Observable Architectures</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProblemSolvingPage;
