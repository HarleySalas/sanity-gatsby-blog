import React, { useEffect, useCallback } from "react";
import "./project.scss";
import { useDispatch } from "../../../../context/store";
import { setSelectedProjectDefault } from "../../../../context/selectedProject/selectedProject.actions";

import BasicPageHero from "../../../BasicPageHero/BasicPageHero";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectSelection from "./ProjectSelection/ProjectSelection";
import ProjectOptions from "./ProjectOptions/ProjectOptions";

const ProjectTemplate = ({ project }) => {
  const {
    name,
    images,
    price,
    bedrooms,
    bathrooms,
    categories,
    floors,
    interiorSize,
    totalSize,
    totalArea,
    blueprintsDisplay,
    originalBlueprint,
    _rawDescription,
    foundations,
  } = project;
  const details = {
    price,
    bedrooms,
    bathrooms,
    categories,
    floors,
    interiorSize,
    totalSize,
    totalArea,
  };
  const projectDescriptionData = {
    blueprintsDisplay,
    originalBlueprint,
    _rawDescription,
  };

  const options = { foundations };

  const dispatch = useDispatch();

  const setDefaults = useCallback(() => {
    dispatch(
      setSelectedProjectDefault({
        name: project.name,
        price: project.price,
        foundations: project.foundations,
      })
    );
  }, [dispatch, project.name, project.price, project.foundations]);

  useEffect(() => {
    setDefaults();
  });

  return (
    <div className="project">
      <BasicPageHero basic title={name} />
      <ProjectSelection project={project} />
      <div className="project__carousel-wrapper">
        <div className="container project__container">
          <div className="project__img-details">
            <ProjectCarousel images={images} />
            <ProjectDetails details={details} />
          </div>
        </div>
      </div>

      <div className="container">
        <ProjectDescription data={projectDescriptionData} />
        <ProjectOptions options={options} />
      </div>
    </div>
  );
};

export default ProjectTemplate;
