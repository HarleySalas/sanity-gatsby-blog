import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "./home-hero.scss";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { useMediaQuery } from "../../../../hooks";

import Button from "../../../Button/Button";

const HomeHero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "images/hero-image-3.png" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);
  const isDesktop = useMediaQuery("(min-width: 75em)");

  return (
    <section className="home-hero">
      <BackgroundImage
        Tag="div"
        {...bgImage}
        preserveStackingContext
        className="home-hero__background"
        backgroundColor="#26262c"
      >
        <div className="home-hero__background__overlay">
          <div className="home-hero__spacer"></div>
          <div className="container home-hero__container">
            <span className="home-hero__subtitle">От 990 000 ₽</span>
            <h1 className="home-hero__title">
              {/* {isDesktop ? "yes" : "Каркасные дома по технологиям из Канады и Финляндии из Канады и Финляндии"} */}
              {isDesktop ? (
                <>
                  Каркасные дома по технологиям
                  <br />
                  из Канады и Финляндии
                </>
              ) : (
                <>Каркасные дома по технологиям из Канады и Финляндии</>
              )}
            </h1>

            <Button linkTo="/projects" arrowRight>
              Наши проекты
            </Button>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export default HomeHero;
