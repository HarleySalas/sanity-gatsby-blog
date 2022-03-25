import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "./home-hero.scss";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Button from "../../../Button/Button";

const HomeHero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/hero-image.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <section className="home-hero">
      <BackgroundImage
        Tag="div"
        {...bgImage}
        preserveStackingContext
        className="home-hero__background"
      >
        <div className="home-hero__background__overlay">
          <div className="container home-hero__container">
            <h1 className="home-hero__title">
              Каркасные дома по технологиями
              <br />
              из Канады и Финляндии
            </h1>
            <span className="home-hero__subtitle">От 990000 ₽</span>
            <Button linkTo="/projects">Посмотреть проекты</Button>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export default HomeHero;
