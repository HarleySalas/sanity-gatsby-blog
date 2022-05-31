import React from "react";
import { Link } from "gatsby";
import "./about-links.scss";

const AboutLinks = () => {
  return (
    <section className="about-links">
      <div className="container about-links__container">
        <div className="about-links__wrapper">
          <div className="about-links__title">See More About Us</div>
          <ul className="about-links__ul">
            <li className="about-links__li">
              <Link
                to="/about"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                О компании
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/company"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                О нас
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/how-we-work"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                Как мы работаем
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/technologies-and-materials"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                Технологии и материалы
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/credit-maternity-capital"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                Кредит и материнский капитал
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/licenses"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                Лицензии
              </Link>
            </li>
            <li className="about-links__li">
              <Link
                to="/about/faq"
                className="about-links__link"
                activeClassName="about-links__link--active"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutLinks;
