import React from "react";
import "./styles/pageStyles.css";
import kareGif from "../assets/kare.gif";

const FeaturePage = () => {
  const handleClick = () => {
    window.open(
      "https://medium.com/@n_lwandisozwane/keare-personalised-skincare-backed-by-ai-63292357e500"
    );
  };
  return (
    <div>
      <div className="feature-container">
        <div className="feature-image-container">
          <img src={kareGif} alt="feature-image" className="feature-image" />
        </div>
        <div className="feature-text-container">
          <h1 className="feature-header">
            Kare: Intelligent Skincare Companion
          </h1>
          <h2 className="feature-sub-header">
            Real-time ML, distributed systems, consultation
          </h2>
          <span className="feature-text">
            Kare is a full-stack, ML-powered skincare app that empowers users to
            make informed choices about their skin health. By allowing users to
            input detailed skincare routines, products, and goals, Kare analyzes
            trends, detects inconsistencies, and suggests evidence-backed
            improvements. Unlike generic skincare tools, Kare adapts to
            real-world data and evolves with each interaction. The app was built
            to explore how real-time feedback, behavior tracking, and
            lightweight machine learning models can be used to personalize
            health-related guidance — all within a user-friendly mobile
            experience.
          </span>
          <ul className="feature-bullets">
            <li>Machine Learning: Recommendation system: KNN & FFNN</li>
            <li>
              Frontend: React Native with real-time UX for data input and
              feedback
            </li>
            <li> Backend: Django DRF & MySQL</li>
            <li>
              Deployment: Dockerized, hosted on GCP, CI/CD via GitHub Actions
            </li>
          </ul>
          <button className="read-article-bttn" onClick={handleClick}>
            Read Featured Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
