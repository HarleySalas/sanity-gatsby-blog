import React from "react";
import ProjectFoundationItem from "./ProjectFoundationItem/ProjectFoundationItem";
import "./project-foundations.scss";
import { dynamicSort } from "../../../../../../lib/helpers";

const ProjectFoundations = ({ foundations }) => {
  const sortedFoundations = foundations.sort(dynamicSort("cost"));

  return (
    <div className="project-foundations">
      <h3 className="project-foundations__title">Выберите фундамент</h3>
      <ul className="project-foundations__ul">
        {sortedFoundations.map((foundation, index) => (
          <ProjectFoundationItem
            foundation={foundation}
            index={index}
            key={foundation.type.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectFoundations;
