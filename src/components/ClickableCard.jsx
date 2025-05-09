import React from "react";
import "./styles/componentStyles.css";

export const ClickableCard = (props) => {
  return (
    <div
      className="clickable-card-background"
      onClick={props.onClick}
      style={{ backgroundImage: `url(${props.imageSrc})` }}
    >
      <div className="card-content-overlay">
        <h1 className="project-name">{props.heading}</h1>
        <p className="project-description">{props.description}</p>
        <button className="project-button">{"View Project"}</button>
      </div>
    </div>
  );
};
