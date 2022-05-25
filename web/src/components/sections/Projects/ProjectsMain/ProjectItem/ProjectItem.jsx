import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./project-item.scss";

import {
  toRubleFormat,
  correctGrammarFromValue,
  correctGrammarForTwo,
} from "../../../../../lib/helpers";

import SqmOutline from "../../../../../assets/icons/sqm-outline.svg";
import StairsOutline from "../../../../../assets/icons/stairs-outline.svg";
import BedOutline from "../../../../../assets/icons/bed-outline.svg";
import TubOutline from "../../../../../assets/icons/tub-outline.svg";

import Button from "../../../../Button/Button";
import ArrowStroke from "../../../../../assets/icons/arrow-stroke.svg";

const ProjectItem = ({ project }) => {
  if (!project) return null;
  const bedrooms = correctGrammarFromValue(
    project.bedrooms,
    "Спальня",
    "Спальни",
    "Спален"
  );

  const bathrooms = correctGrammarFromValue(
    project.bathrooms,
    "Санузел",
    "Санузла",
    "Санузлов"
  );

  const floors = correctGrammarForTwo(project.floors, "Этаж", "Этажа");

  return (
    <li className="project-item">
      <Link
        to={`/projects/${project.slug.current}`}
        className="project-item__link"
      >
        <div className="project-item__image-container">
          <div className="project-item__image-overlay">
            <ArrowStroke className="project-item__arrow" />
          </div>
          <GatsbyImage
            image={project.images[0].asset.gatsbyImageData}
            aspectratio={16 / 9}
            alt={`A render of project ${project.name}`}
            className="project-item__image-wrapper"
            backgroundColor="#26262c"
            imgClassName="project-item__image"
          />
        </div>
      </Link>

      <div className="project-item__container">
        <div className="project-item__title-container">
          <h2 className="project-item__name">{project.name}</h2>
          <div className="project-item__price">
            {toRubleFormat(project.price)}
          </div>
        </div>
        <div className="project-item__detail-wrapper">
          <div className="project-item__row">
            <div className="project-item__detail">
              <div className="project-item__detail-top">
                <BedOutline className="project-item__detail-icon" />
                <span className="project-item__detail-value">
                  {project.bedrooms}
                </span>
              </div>
              <div className="project-item__detail-bottom">
                <span className="project-item__detail-description">
                  {bedrooms}
                </span>
              </div>
            </div>
            <div className="project-item__detail">
              <div className="project-item__detail-top">
                <TubOutline className="project-item__detail-icon" />
                <span className="project-item__detail-value">
                  {project.bathrooms}
                </span>
              </div>
              <div className="project-item__detail-bottom">
                <span className="project-item__detail-description">
                  {bathrooms}
                </span>
              </div>
            </div>
          </div>
          <div className="project-item__row">
            <div className="project-item__detail">
              <div className="project-item__detail-top">
                <SqmOutline className="project-item__detail-icon" />
                <span className="project-item__detail-value">
                  {project.interiorSize} м&sup2;
                </span>
              </div>
              <div className="project-item__detail-bottom">
                <span className="project-item__detail-description">
                  Жилая площадь
                </span>
              </div>
            </div>
            <div className="project-item__detail">
              <div className="project-item__detail-top">
                <StairsOutline className="project-item__detail-icon" />
                <span className="project-item__detail-value">
                  {project.floors}
                </span>
              </div>
              <div className="project-item__detail-bottom">
                <span className="project-item__detail-description">
                  {floors}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item__btn-row">
          <Button
            btnSize="sm"
            btnColor="grey"
            linkTo={`/projects/${project.slug.current}`}
            // btnStyle="outline"
            arrowRight
          >
            Перейти в проект
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
