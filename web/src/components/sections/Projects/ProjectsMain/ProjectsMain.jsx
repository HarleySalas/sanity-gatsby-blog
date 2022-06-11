import React from "react";
import "./projects-main.scss";

import ProjectsList from "./ProjectsList/ProjectsList";

const ProjectsMain = ({ projects }) => {
  return (
    <div className="projects-main">
      <div className="projects-main__wrapper">
        <div className="container projects-main__container">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
