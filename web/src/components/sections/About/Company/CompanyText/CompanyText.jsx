import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "../../../../PortableText/PortableText";
import "./company-text.scss";

const CompanyText = ({ data, imgData }) => {
  return (
    <section className="company-text">
      <div className="container company-text__container">
        <div className="company-text__wrapper">
          <div className="company-text__img-wrapper">
            <GatsbyImage
              image={imgData}
              className="company-text__img"
              alt="main office building of MRS House"
            />
          </div>
          <div className="company-text__text-wrapper">
            <PortableText data={data._rawBody} noMargin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyText;
