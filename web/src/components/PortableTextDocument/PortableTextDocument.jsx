import React from "react";
import "./portable-text-document.scss";

import PortableText from "../PortableText/PortableText";

const PortableTextDocument = ({ data }) => {
  return (
    <div className="portable-text-document">
      <div className="container portable-text-document__container">
        <div className="portable-text-document__wrapper">
          <PortableText data={data} noMargin document />
        </div>
      </div>
    </div>
  );
};

export default PortableTextDocument;
