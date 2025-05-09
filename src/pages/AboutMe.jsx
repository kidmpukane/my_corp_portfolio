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
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-tagline">
          <h1 className="tagline-quote">
            "Certified MLE with 4+ Years of Applied Experience"
          </h1>
        </div>
        <div className="profile-portrait">
          <img
            src={normalImage}
            alt="Lwandiso Zwane"
            className="portrait-image"
          />
        </div>
        <div className="profile-cta">
          <button
            className="cta-button cv-download"
            onClick={() => {
              downloadCv(MY_CV);
            }}
          >
            Download CV
          </button>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-intro">
          <h1 className="intro-name">Lwandiso Zwane</h1>
          <h2 className="intro-title">Machine Learning Engineer</h2>

          <p className="intro-bio">
            Machine Learning Engineer with expertise in building and deploying
            ML models in production, specializing in predictive maintenance,
            real-time analytics, and personalized AI applications. Proficient in
            cloud computing (AWS/GCP), full-stack development (React, Node.js,
            Django), and scalable infrastructure (Terraform, Docker,
            Kubernetes). Passionate about designing data-driven solutions that
            optimize business operations and drive digital innovation.
          </p>
        </div>

        <div className="profile-social">
          <button
            onClick={() => [
              navigator.clipboard.writeText("lwandisozwane91@gmail.com"),
              alert("Email Copied To Clip Board"),
            ]}
            className="social-button email-button"
          >
            Email
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/lwandiso-zwane-60506a252/"
              );
            }}
            className="social-button linkedin-button"
          >
            LinkedIn
          </button>
          <button
            onClick={() => {
              window.open("https://medium.com/@n_lwandisozwane");
            }}
            className="social-button medium-button"
          >
            Medium
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/kidmpukane");
            }}
            className="social-button medium-button"
          >
            GitHub
          </button>
        </div>

        <div className="profile-skills">
          <h1 className="skills-heading">Technical Skills</h1>
          <div className="skills-grid">
            <div className="skills-column">
              <ul className="skills-list">
                <li className="skills-item">Python </li>
                <li className="skills-item">TensorFlow/PyTorch</li>
                <li className="skills-item">Scikit-learn</li>
                <li className="skills-item">FastAPI </li>
                <li className="skills-item">Docker </li>
              </ul>
            </div>
            <div className="skills-column">
              <ul className="skills-list">
                <li className="skills-item">Kubernetes</li>
                <li className="skills-item">AWS/GCP</li>
                <li className="skills-item">PostgreSQL</li>
                <li className="skills-item">React</li>
                <li className="skills-item">GitHub Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
