import React from "react";
import ProjectFoundations from "./ProjectFoundations/ProjectFoundations";
import ProjectFinishingOptions from "./ProjectFinishingOptions/ProjectFinishingOptions";
import "./project-options.scss";

const ProjectOptions = ({ options }) => {
  const { foundations, finishingOptions } = options;

  return (
    <section className="project-options">
      <h2 className="project-options__title">Рассчитайте свой проект</h2>
      <ProjectFinishingOptions options={finishingOptions} />
      <ProjectFoundations foundations={foundations} />
    </section>
  );
};

export default ProjectOptions;
