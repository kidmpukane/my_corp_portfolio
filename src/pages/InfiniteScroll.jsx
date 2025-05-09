import { useState } from "react";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import FeaturePage from "./FeaturePage";
import ProjectsPage from "./ProjectsPage";
import ProblemSolvingPage from "./ProblemSolvingPage";
import { Element, Link as ScrollLink } from "react-scroll";
import "./styles/PageStyles.css";

const InfiniteScrollPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="infinite-scroll-container">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="name-container">
            <h1 className="my-name">Lwandiso Zwane</h1>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ScrollLink
            to="feature-page"
            smooth
            duration={500}
            onClick={closeMenu}
          >
            Articles
          </ScrollLink>
          <ScrollLink
            to="projects-page"
            smooth
            duration={500}
            onClick={closeMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="about-me-page"
            smooth
            duration={500}
            onClick={closeMenu}
          >
            About
          </ScrollLink>
          <button
            className="btn btn-green"
            onClick={() =>
              (window.location.href =
                "https://calendly.com/lwandisozwane91/30min")
            }
          >
            Contact Me
          </button>
        </div>
      </nav>

      <div className="infinite-scroll-container">
        <Element name="home">
          <HomePage />
        </Element>
        <div className="gap">
          <div className="gap-container">
            <span className="pg-num">01</span>
            <span className="pg-txt">Featured Project</span>
          </div>
          <div className="line"></div>
        </div>
        <Element name="feature-page">
          <FeaturePage />
        </Element>
        {/* <div className="gap">
          <div className="gap-container">
            <span className="pg-num">02</span>
            <span className="pg-txt">Problem Solving Process</span>
          </div>
          <div className="line"></div>
        </div> */}
        {/* <Element name="my-process">
          <ProblemSolvingPage />
        </Element> */}
        <div className="gap">
          <div className="gap-container">
            <span className="pg-num">02</span>
            <span className="pg-txt">Project Page</span>
          </div>
          <div className="line"></div>
        </div>
        <Element name="projects-page">
          <ProjectsPage />
        </Element>
        <div className="gap">
          <div className="gap-container">
            <span className="pg-num">03</span>
            <span className="pg-txt">About Me</span>
          </div>
          <div className="line"></div>
        </div>
        <Element name="about-me-page">
          <AboutMe />
        </Element>
      </div>
    </div>
  );
};

export default InfiniteScrollPage;
