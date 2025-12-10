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
        <a className="ts-header">Technical Depth & Competencies</a>

        {/* Machine Learning & AI */}
        <div className="ml-skills">
          <a className="tech-stack-header">Machine Learning & AI</a>
          <div className="tech-stack-list-right">
            <p>
              Predictive Maintenance, Fault & Anomaly Detection, Sequence Models
              (LSTM/Bi-LSTM)
            </p>
            <p>
              NLP Intent Parsing, RAG Pipelines, Agentic Reasoning, Contextual
              Memory
            </p>
          </div>
          <div className="tech-stack-list-left">
            <p>Feature Engineering, Model Evaluation & Experiment Tracking</p>
            <p>Explainability (SHAP, LIME), Industrial AI Systems</p>
          </div>
        </div>

        {/* Software Engineering & Backend */}
        <div className="swe-skills">
          <a className="tech-stack-header">Software Engineering & Backend</a>
          <div className="tech-stack-list-right">
            <p>Python, Node.js, FastAPI, REST APIs</p>
            <p>
              Microservice Architecture, Event-Driven Systems, Async Pipelines
            </p>
          </div>
          <div className="tech-stack-list-left">
            <p>CI/CD (GitHub Actions), Docker, Terraform</p>
            <p>
              SQL/NoSQL (PostgreSQL, MySQL), Logging & Observability (FTIR/FDIR
              Tracing)
            </p>
          </div>
        </div>

        {/* Systems Architecture */}
        <div className="architecture-skills">
          <a className="tech-stack-header">Systems & Architecture</a>
          <div className="tech-stack-list-right">
            <p>Modular Reasoning Engines, Pluggable Agent Architectures</p>
            <p>Event-Oriented, Data-Intensive & Distributed Systems</p>
          </div>
          <div className="tech-stack-list-left">
            <p>
              Fault-Tolerant Patterns, API Gateways, Schema Design & Versioning
            </p>
            <p>Scalable, Evolvable, and Observable System Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolvingPage;
