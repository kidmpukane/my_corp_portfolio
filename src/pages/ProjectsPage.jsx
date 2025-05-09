import React from "react";
import "./styles/pageStyles.css";
import { ClickableCard } from "../components/ClickableCard";
import wtls from "../assets/waitless.avif";
import mk1 from "../assets/mk1.gif";
import kareGif from "../assets/kare.gif";

const cardInfo = [
  {
    image: mk1,
    heading: "Mk-001",
    description: "A Human-Centred Wardrobe Planner Powered by A/B Testing.",
    buttonText: "View Article",
    link: "https://medium.com/@n_lwandisozwane/reimagining-fashion-for-the-rest-of-us-a-human-centred-wardrobe-planner-powered-by-a-b-testing-d8135e639be9",
  },
  {
    image: wtls,
    heading: "Waitless", // Changed heading
    description:
      "An intelligent scheduling system that lets clients self-onboard remotely and streamlines booking for service-based businesses.",
    buttonText: "Learn Project",
    link: "https://waitless-landing-page-8vz6s48hf-kidmpukanes-projects.vercel.app/about",
  },
  {
    image: kareGif,
    heading: "Kare", // Changed heading
    description:
      "A machine learning–powered skincare app that personalizes product recommendations based on user routines and goals.",
    buttonText: "See Tech",
    link: "https://github.com/kidmpukane/kare_app?tab=readme-ov-file",
  },
];

const ProjectsPage = () => {
  const handleCardClick = (link) => {
    window.open(link);
  };

  return (
    <div className="page-container">
      {cardInfo.map((card, index) => (
        <ClickableCard
          key={index} // Add a unique key when mapping over an array
          imageSrc={card.image} // Use imageSrc prop
          heading={card.heading}
          description={card.description}
          buttonText={card.buttonText} // Pass the buttonText
          onClick={() => handleCardClick(card.link)} // Pass the heading to the click handler
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
