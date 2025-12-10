import React from "react";
import "./styles/pageStyles.css";
import { ClickableContainer } from "../components/ClickableContanier";

const projectInfo = [
  {
    project_name: "AVA -[Autonomous Virtual Assistant]",
    industry: "Industrial Automation",
    category: "AI-Agent Orchestration",
    description:
      "AVA is a modular reasoning engine designed for flexibility, extendability, and rapid experimentation across industrial diagnostics. It leverages machine learning to predict equipment failures and optimize maintenance schedules, reducing downtime and operational costs.",
    year: 2025,
    link: "https://github.com/kidmpukane/ava",
  },
  {
    project_name: "Grid Guard -[AVA Framework Module]",
    industry: "Energy and Utilities",
    category: "AI Reasoning Engine",
    description:
      "GridGuard is a modular reasoning engine designed to analyze diagnostic queries within smart-grid environments. It follows a fully decomposed, microservice-style architecture where each stage of the reasoning pipeline is an independent, swappable unit.",
    year: 2025,
    link: "https://github.com/kidmpukane/grid_guard",
  },
  {
    project_name: "E2E Intent Parser",
    industry: "Industrial NLP",
    category: "NLP Pipeline",
    description:
      "Natural Language intent parsing system for technician-style instructions in industrial and Micro-Grid environments. It takes raw natural language like, and outputs structured actions, using , BERT-based models for entity recognition and intent classification, combined with rule-based parsing for precise action extraction.",
    year: 2025,
    link: "https://github.com/kidmpukane/e2e_intent_parser",
  },
  {
    project_name: "KARE-Skin",
    industry: "Health and Wellness",
    category: "Machine Learning Application",
    description:
      "KARE is a machine learning–powered skincare app that personalizes product recommendations based on user routines and goals. It utilises Machine Learning algorithms to analyze skin conditions and suggests tailored skincare regimens to improve skin health over time.",
    year: 2024,
    link: "https://github.com/kidmpukane/kare_app?tab=readme-ov-file",
  },
];

const ProjectsPage = () => {
  const handleCardClick = (link) => {
    window.open(link);
  };

  return (
    <div className="page-container">
      {projectInfo.map((project, index) => (
        <ClickableContainer
          key={index}
          projectName={project.project_name}
          projectIndustry={project.industry}
          projectCategory={project.category}
          projectDescription={project.description}
          projectYear={project.year}
          onClick={() => handleCardClick(project.link)}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
