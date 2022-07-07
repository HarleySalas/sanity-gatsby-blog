import React from "react";
import { Link } from "gatsby";
import "./about-next-prev.scss";
import ArrowStroke from "../../../../../assets/icons/arrow-stroke.svg";

const AboutNextPrev = ({ next, nextLink, prev, prevLink }) => {
  return (
    <section className="about-next-prev">
      <div className="container about-next-prev__container">
        <div className="about-next-prev__wrapper">
          {next ? (
            <div className="about-next-prev__block">
              <div className="about-next-prev__subtitle">
                следующая страница
              </div>
              <Link className="about-next-prev__link" to={nextLink}>
                <h2 className="about-next-prev__title">
                  <span className="about-next-prev__title__span about-next-prev__title__span--next">
                    {next}
                  </span>
                  <ArrowStroke className="about-next-prev__arrow" />
                </h2>
              </Link>
            </div>
          ) : null}
          {prev ? (
            <div className="about-next-prev__block">
              <div className="about-next-prev__subtitle">
                предыдущая страница
              </div>
              <Link className="about-next-prev__link" to={prevLink}>
                <h2 className="about-next-prev__title">
                  <ArrowStroke className="about-next-prev__arrow about-next-prev__arrow--prev" />
                  <span className="about-next-prev__title__span about-next-prev__title__span--prev">
                    {prev}
                  </span>
                </h2>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default AboutNextPrev;
