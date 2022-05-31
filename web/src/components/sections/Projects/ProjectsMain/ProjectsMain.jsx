import React from "react";
import "./projects-main.scss";

import ProjectsList from "./ProjectsList/ProjectsList";
import ProjectsContact from "../ProjectsContact/ProjectsContact";

const ProjectsMain = ({ projects }) => {
  return (
    <div className="projects-main">
      <div className="projects-main__wrapper">
        <div className="container projects-main__container">
          <ProjectsList projects={projects} />
        </div>
      </div>

      <ProjectsContact />
    </div>
  );
};

export default ProjectsMain;
