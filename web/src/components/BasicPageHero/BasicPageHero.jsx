import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import "./basic-page-hero.scss";

const BasicPageHero = ({ placeholderImage, title, imageTop, basic }) => {
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <section className={`basic-page-hero ${basic && "basic-page-hero--basic"}`}>
      {placeholderImage ? (
        <>
          <BackgroundImage
            Tag="div"
            {...bgImage}
            preserveStackingContext
            className={`basic-page-hero__background ${
              imageTop && "basic-page-hero__background--top"
            }`}
          ></BackgroundImage>
          <div className="basic-page-hero__background__overlay">
            <div className="container basic-page-hero__container">
              <h1 className="basic-page-hero__title">{title}</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="basic-page-hero__background__overlay basic-page-hero__background__overlay--empty">
          <div className="container basic-page-hero__container">
            <h1 className="basic-page-hero__title">{title}</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default BasicPageHero;
