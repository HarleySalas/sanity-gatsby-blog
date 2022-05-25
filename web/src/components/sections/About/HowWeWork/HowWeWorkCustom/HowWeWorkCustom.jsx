import React from "react";
import PortableText from "../../../../PortableText/PortableText";
import "./how-we-work-custom.scss";

const HowWeWorkCustom = ({ text }) => {
  return (
    <section className="how-we-work-custom">
      <div className="container how-we-work-custom__container">
        <PortableText data={text} noMargin />
      </div>
    </section>
  );
};

export default HowWeWorkCustom;
