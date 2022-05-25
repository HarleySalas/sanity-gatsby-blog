import React from "react";
import ProjectFoundations from "./ProjectFoundations/ProjectFoundations";
import "./project-options.scss";

const ProjectOptions = ({ options }) => {
  const { foundations } = options;
  return (
    <section className="project-options">
      <h2 className="project-options__title">Настройте свой проект</h2>
      <ProjectFoundations foundations={foundations} />
    </section>
  );
};

export default ProjectOptions;
