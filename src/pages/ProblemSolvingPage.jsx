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
        <a className="ts-header">TECH STACK</a>
        <div className="ml-skills">
          <a className="tech-stack-header">Machine Learning</a>
          <div className="tech-stack-list-right"></div>
          <div className="tech-stack-list-left"></div>
        </div>
        <div className="swe-skills">
          <a className="tech-stack-header">Software Engineering</a>
          <div className="tech-stack-list-right"></div>
          <div className="tech-stack-list-left"></div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolvingPage;
