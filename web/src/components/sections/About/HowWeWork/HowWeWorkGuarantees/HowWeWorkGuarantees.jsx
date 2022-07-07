import React from "react";
import PortableText from "../../../../PortableText/PortableText";
import "./how-we-work-guarantees.scss";

const HowWeWorkGuarantees = ({ guarantees }) => {
  return (
    <section className="how-we-work-guarantees">
      <div className="container how-we-work-guarantees__container">
        <h2 className="how-we-work-guarantees__h2">
          MRS House гарантирует, что:
        </h2>
        <ul className="how-we-work-guarantees__ul">
          {guarantees &&
            guarantees.map((guarantee) => (
              <li className="how-we-work-guarantees__li" key={guarantee._key}>
                <div className="howe-we-work-guarantees__content-wrapper">
                  <h3 className="how-we-work-guarantees__title">
                    {guarantee.title}
                  </h3>
                  <PortableText data={guarantee._rawText} noMargin guarantee />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default HowWeWorkGuarantees;
