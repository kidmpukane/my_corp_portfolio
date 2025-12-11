import React from "react";
import "./styles/pageStyles.css";
import normalImage from "../assets/normal_photo.png";
import myCv from "../assets/Lwandiso-Zwane-FlowCV-Resume-20250509.pdf";

const MY_CV = myCv;

function AboutMe() {
  const downloadCv = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
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
        <div className="contact-container">
          <a className="spec-header-l">CONTACT ME</a>
          <div>
            <a className="contact-me-h">SOCIALS</a>
            <div className="contact-list">
              <a>-X</a>
              <a>-LINKEDIN</a>
              <a>-GITHUB</a>
              <a>-EMAIL</a>
              <a>-MEDIUM</a>
            </div>
            <div className="profile-cta">
              <button
                className="cta-button-resume"
                onClick={() => {
                  downloadCv(MY_CV);
                }}
              >
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="technologies-skills">
        <a className="ts-header">TECHNICAL DEPTH & COMPETENCIES</a>

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

export default AboutMe;

// ("lwandisozwane91@gmail.com");
// ("https://www.linkedin.com/in/lwandiso-zwane-60506a252/");
// ("https://medium.com/@n_lwandisozwane");
// ("https://github.com/kidmpukane");
