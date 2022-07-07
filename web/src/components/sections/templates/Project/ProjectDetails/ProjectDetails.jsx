import React from "react";
import "./project-details.scss";

import BedOutline from "../../../../../assets/icons/bed-outline.svg";
import TubOutline from "../../../../../assets/icons/tub-outline.svg";
import StairsOutline from "../../../../../assets/icons/stairs-outline.svg";
import SqmOutline from "../../../../../assets/icons/sqm-outline.svg";

import {
  toRubleFormat,
  correctGrammarFromValue,
  correctGrammarForTwo,
} from "../../../../../lib/helpers";

const ProjectDetails = ({ details }) => {
  const {
    price,
    bedrooms,
    bathrooms,
    categories,
    floors,
    interiorSize,
    totalSize,
    totalArea,
    buildingArea,
    constructionArea,
  } = details;

  const bedroomsText = correctGrammarFromValue(
    bedrooms,
    "Спальня",
    "Спальни",
    "Спален"
  );
  const bathroomsText = correctGrammarFromValue(
    bathrooms,
    "Санузел",
    "Санузла",
    "Санузлов"
  );
  const floorsText = correctGrammarForTwo(floors, "Этаж", "Этажа");

  return (
    <div className="project-details">
      <div className="project-details__wrapper">
        <div className="project-details__detail project-details__detail--1">
          <div className="project-details__price">{toRubleFormat(price)}</div>
        </div>
        <div className="project-details__detail project-details__detail--1">
          <div className="project-details__categories">
            {categories &&
              categories.map((category) => (
                <div className="project-details__category" key={category.id}>
                  {category.title}
                </div>
              ))}
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <BedOutline className="project-details__detail__icon" />
            <div className="project-details__detail__value">{bedrooms}</div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {bedroomsText}
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <TubOutline className="project-details__detail__icon" />
            <div className="project-details__detail__value">{bathrooms}</div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {bathroomsText}
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <SqmOutline className="project-details__detail__icon" />
            <div className="project-details__detail__value">
              {interiorSize} м&sup2;
            </div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              Жилая площадь
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <StairsOutline className="project-details__detail__icon" />
            <div className="project-details__detail__value">{floors}</div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {floorsText}
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <div className="project-details__detail__value">Общая площадь</div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {totalSize} м&sup2;
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <div className="project-details__detail__value">
              Площадь застройки
            </div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {buildingArea} м&sup2;
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <div className="project-details__detail__value">
              Строительная площадь
            </div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">
              {constructionArea} м&sup2;
            </div>
          </div>
        </div>
        <div className="project-details__detail project-details__detail--2">
          <div className="project-details__detail__top">
            <div className="project-details__detail__value">Размер</div>
          </div>
          <div className="project-details__detail__bottom">
            <div className="project-details__detail__description">{`${totalArea[0]} x ${totalArea[1]} м`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
