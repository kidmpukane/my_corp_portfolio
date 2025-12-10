import React from "react";

function ProblemSolvingPage() {
  return (
    <div>
      <div className="name-and-occupation">
        <a>LWANDISO ZWANE </a>
        <span>MACHINE LEARNING ENGINEER</span>
      </div>
      <div className="my-specs">
        <div className="spec-item-1">
          <a>Age:</a>
          <a> 26</a>
        </div>
        <div className="spec-item-2">
          <a>Location:</a>
          <a>South Africa (Mpumalanga, Witbank)</a>
        </div>
        <div className="spec-item-3">
          <a>Mobility:</a>
          <a>Open to relocation</a>
        </div>
      </div>
      <div className="my-bio">
        <a>
          Highly motivated and Certified Machine Learning Engineer specialising
          in Industrial AI, Reasoning Systems, and MLOps. Proven ability to
          design, architect, and deploy complex, modular microservice systems
          (FastAPI, Docker, AWS) for predictive maintenance and real-time
          anomaly detection. Focused on building auditable and scalable AI
          solutions, demonstrated through rigorous, self-directed projects
          (GridGuard, AVA) utilising multi-agent orchestration and modern RAG
          frameworks.
        </a>
      </div>
    </div>
  );
}

export default ProblemSolvingPage;
