import React from "react";
import "./projects-list.scss";

import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectsList = ({ projects }) => {
  console.log(projects);
  return (
    <ul className="projects-list">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectsList;
