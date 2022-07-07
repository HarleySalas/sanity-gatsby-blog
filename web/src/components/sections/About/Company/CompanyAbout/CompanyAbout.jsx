import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "../../../../PortableText/PortableText";
import "./company-about.scss";

const CompanyAbout = ({ data, imgData }) => {
  return (
    <section className="company-about">
      <div className="container company-about__container">
        <div className="company-about__wrapper">
          <div className="company-about__half">
            <GatsbyImage
              image={imgData}
              className="company-about__img"
              alt="main office building of MRS House"
            />
          </div>
          <div className="company-about__half">
            <div className="company-about__content">
              <PortableText data={data._rawBody} noMargin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
