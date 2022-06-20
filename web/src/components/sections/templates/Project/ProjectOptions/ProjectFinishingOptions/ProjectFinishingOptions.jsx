import React from "react";
import "./project-finishing-options.scss";
import ProjectFinishingItem from "./ProjectFinishingItem/ProjectFinishingItem";
import { useAccordion } from "../../../../../../hooks";

const ProjectFinishingOptions = ({ options }) => {
  const accordionKeys = options.map((option) => option._key);
  const accordionProps = useAccordion(accordionKeys);

  return (
    <div className="project-finishing-options">
      <h3 className="project-finishing-options__title">Выберите вид отделки</h3>
      <div className="project-finishing-options__wrapper">
        <ul className="project-finishing-options__ul">
          {options.map((option) => (
            <ProjectFinishingItem
              key={option._key}
              option={option}
              accordionProps={accordionProps[option._key]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectFinishingOptions;
