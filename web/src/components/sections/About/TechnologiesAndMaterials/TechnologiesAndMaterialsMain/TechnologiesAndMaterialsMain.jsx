import React from "react";
import PortableText from "../../../../PortableText/PortableText";
import "./technologies-and-materials-main.scss";

const TechnologiesAndMaterialsMain = ({ data }) => {
  return (
    <article className="technologies-and-materials-main">
      <div className="container technologies-and-materials-main__container">
        <PortableText data={data._rawContent} noMargin />
      </div>
    </article>
  );
};

export default TechnologiesAndMaterialsMain;
