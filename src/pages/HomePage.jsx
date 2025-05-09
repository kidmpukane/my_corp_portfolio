import React from "react";
import "./styles/pageStyles.css";
import myEditedImage from "../assets/edited_photo.jpeg";
import myCv from "../assets/Lwandiso-Zwane-FlowCV-Resume-20250509.pdf";

const MY_CV = myCv;

const HomePage = () => {
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
    <div className="homepage-container">
      <div className="homepage-text-container">
        <h1 className="homepage-header">
          Building Explainable, Scalable ML Systems
        </h1>
        <span className="homepage-text">
          Real-time intelligence, distributed architecture, and end-to-end
          consultation. I build machine learning systems that don’t just work —
          they explain themselves
        </span>
        <button
          className="download-res-bttn"
          onClick={() => {
            downloadCv(MY_CV);
          }}
        >
          Download Resume
        </button>
      </div>
      <div className="homepage-image-container">
        <img
          src={myEditedImage}
          alt="homepage-image"
          className="homepage-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
