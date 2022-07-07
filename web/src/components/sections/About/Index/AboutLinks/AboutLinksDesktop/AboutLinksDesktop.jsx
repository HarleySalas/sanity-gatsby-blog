import React from "react";
import { Link } from "gatsby";
import "./about-links-desktop.scss";
import jsonData from "../../../../../../../content/about-nav-links.json";

const AboutLinksDesktop = () => {
  return (
    <div className="about-links-desktop">
      <div className="container about-links-desktop__container">
        <div className="about-links-desktop__wrapper">
          <div className="about-links-desktop__title">О КОМПАНИИ</div>
          <ul className="about-links-desktop__ul">
            {jsonData.aboutNavLinks.map((link) => (
              <li className="about-links-desktop__li" key={link.title}>
                <Link
                  to={link.link}
                  className="about-links-desktop__link"
                  activeClassName="about-links-desktop__link--active"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutLinksDesktop;
