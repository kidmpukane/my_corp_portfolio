import React from "react";
import "./styles/componentStyles.css";

const ClickableContainer = (props) => {
  return (
    <div
      className="clickable-container"
      onClick={() => console.log(props.onClick)}
    >
      <div className="project-container">
        <div className="p-spec">
          <p>{props.projectName}</p>
          <p>{props.projectIndustry}</p>
          <p>{props.projectCategory}</p>
        </div>

        <div className="p-description">
          <p>
            {props.projectDescription ||
              "A brief description of the project goes here. It provides an overview of the project's goals, features, and technologies used."}
          </p>
        </div>

        <div className="p-links">
          <p>VIEW REPO ⇢</p>
          <p>{props.projectYear}</p>
        </div>
      </div>
    </div>
  );
};

export { ClickableContainer };
