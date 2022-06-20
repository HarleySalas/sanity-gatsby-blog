import React from "react";
import "./project-finishing-item-feature.scss";
import PortableText from "../../../../../../../PortableText/PortableText";

const ProjectFinishingItemFeature = ({ feature }) => {
  return (
    <li className="project-finishing-item-feature">
      <div className="project-finishing-item-feature__wrapper">
        <div className="project-finishing-item-feature__icon">+</div>
        <div className="project-finishing-item-feature__title">
          {feature.title}
        </div>
      </div>
      {feature._rawDescription ? (
        <div className="project-finishing-item-feature__description">
          <PortableText data={feature._rawDescription} noMargin />
        </div>
      ) : null}
    </li>
  );
};

export default ProjectFinishingItemFeature;
