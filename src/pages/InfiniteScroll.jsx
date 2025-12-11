// import { useState } from "react";
import AboutMe from "./AboutMe";
import ProjectsPage from "./ProjectsPage";
import { Element, Link as ScrollLink } from "react-scroll";
import "./styles/pageStyles.css";

const InfiniteScrollPage = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);
  // const closeMenu = () => setMenuOpen(false);

  return (
    <div className="infinite-scroll-container">
      {/* NAV */}
      <div className="nav-links">
        {/* <ScrollLink
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
        </ScrollLink> */}

        {/* <button
          className="btn btn-green"
          onClick={() =>
            (window.location.href =
              "https://calendly.com/lwandisozwane91/30min")
          }
        >
          Contact Me
        </button> */}
      </div>

      <h1 className="page-header">MY PROJECTS</h1>
      <Element name="projects-page">
        <ProjectsPage />
      </Element>

      <h1 className="page-header">ABOUT ME</h1>
      <Element name="about-me-page">
        <AboutMe />
      </Element>
    </div>
  );
};

export default InfiniteScrollPage;
