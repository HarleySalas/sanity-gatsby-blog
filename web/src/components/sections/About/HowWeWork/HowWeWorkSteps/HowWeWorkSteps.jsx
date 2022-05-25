import React from "react";
import PortableText from "../../../../PortableText/PortableText";
import "./how-we-work-steps.scss";

const HowWeWorkSteps = ({ steps }) => {
  return (
    <section className="how-we-work-steps">
      <div className="container how-we-work-steps__container">
        <h2 className="how-we-work-steps__h2">Этапы работы</h2>
        <ol className="how-we-work-steps__ol">
          {steps &&
            steps.map((step) => (
              <li className="how-we-work-steps__li" key={step._key}>
                <div className="how-we-work-steps__li__content-wrapper">
                  <h3 className="how-we-work-steps__title">{step.title}</h3>
                  <PortableText data={step._rawText} noMargin />
                </div>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWorkSteps;
