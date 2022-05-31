import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";
import Button from "../../../Button/Button";
import "./home-featured-project.scss";

import {
  toRubleFormat,
  correctGrammarFromValue,
  correctGrammarForTwo,
} from "../../../../lib/helpers";

import { useMediaQuery } from "../../../../hooks";

import SqmOutline from "../../../../assets/icons/sqm-outline.svg";
import StairsOutline from "../../../../assets/icons/stairs-outline.svg";
import BedOutline from "../../../../assets/icons/bed-outline.svg";
import TubOutline from "../../../../assets/icons/tub-outline.svg";
import ArrowStroke from "../../../../assets/icons/arrow-stroke.svg";

const HomeFeaturedProject = ({ featuredProject }) => {
  const mainImage = featuredProject && featuredProject.images[0];
  const isDesktop = useMediaQuery("(min-width: 75em)");
  const bedrooms =
    featuredProject &&
    correctGrammarFromValue(
      featuredProject.bedrooms,
      "Спальня",
      "Спальни",
      "Спален"
    );
  const bathrooms =
    featuredProject &&
    correctGrammarFromValue(
      featuredProject.bathrooms,
      "Санузел",
      "Санузла",
      "Санузлов"
    );

  const floors =
    featuredProject &&
    correctGrammarForTwo(featuredProject.floors, "Этаж", "Этажа");

  return featuredProject ? (
    <section className="home-featured-project">
      <div className="container home-featured-project__container">
        <div className="home-featured-project__wrapper">
          <div className="home-featured-project__content-wrapper">
            <h2 className="home-featured-project__title">Популярный проект</h2>
            <div className="home-featured-project__content__title">
              {featuredProject.name}
            </div>
            <div className="home-featured-project__content__price">
              {toRubleFormat(featuredProject.price)}
            </div>
            {!isDesktop && (
              <SanityImage
                {...mainImage}
                width={700}
                className="home-featured-project__img"
                config={{
                  fit: "clip",
                }}
              />
            )}
            <div className="home-featured-project__content__details">
              <div className="home-featured-project__content__detail">
                <BedOutline className="home-featured-project__content__detail__icon" />
                <div className="home-featured-project__content__detail__value">
                  {featuredProject.bedrooms}
                </div>
                <div className="home-featured-project__content__detail__title">
                  {bedrooms}
                </div>
              </div>
              <div className="home-featured-project__content__detail">
                <TubOutline className="home-featured-project__content__detail__icon" />
                <div className="home-featured-project__content__detail__value">
                  {featuredProject.bathrooms}
                </div>
                <div className="home-featured-project__content__detail__title">
                  {bathrooms}
                </div>
              </div>
              <div className="home-featured-project__content__detail">
                <SqmOutline className="home-featured-project__content__detail__icon" />
                <div className="home-featured-project__content__detail__value">
                  {featuredProject.interiorSize} м&sup2;
                </div>
                <div className="home-featured-project__content__detail__title">
                  Жилая площадь
                </div>
              </div>
              <div className="home-featured-project__content__detail">
                <StairsOutline className="home-featured-project__content__detail__icon" />
                <div className="home-featured-project__content__detail__value">
                  {featuredProject.floors}
                </div>
                <div className="home-featured-project__content__detail__title">
                  {floors}
                </div>
              </div>
            </div>
            <Button
              linkTo={`/projects/${featuredProject.slug.current}`}
              btnSize="sm"
              btnColor="grey"
              arrowRight
            >
              ПЕРЕЙТИ В ПРОЕКТ
            </Button>
            <Link
              to="/projects"
              className="home-featured-project__content__link"
            >
              Все проекты{" "}
              <ArrowStroke className="home-featured-project__content__link__arrow" />
            </Link>
          </div>
          {isDesktop && (
            <div className="home-featured-project__img-wrapper">
              <SanityImage
                {...mainImage}
                width={900}
                className="home-featured-project__img"
                config={{
                  fit: "clip",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeFeaturedProject;
