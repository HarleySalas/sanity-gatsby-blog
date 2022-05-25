import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./article-hero.scss";

const ArticleHero = ({ mainImage, title }) => {
  return (
    <div className="article-hero">
      <div className="article-hero__image-wrapper">
        <div className="article-hero__image-overlay"></div>
        <SanityImage
          {...mainImage}
          width={1800}
          className="article-hero__image"
          config={{
            fit: "clip",
          }}
        />
      </div>
    </div>
  );
};

export default ArticleHero;
