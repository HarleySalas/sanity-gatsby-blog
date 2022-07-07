import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import "./about-links-mobile.scss";
import Chevron from "../../../../../../assets/icons/chevron.svg";
import jsonData from "../../../../../../../content/about-nav-links.json";
import { useToggle } from "../../../../../../hooks";

const AboutLinksMobile = () => {
  const [active, toggle] = useToggle(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { pathname } = useLocation();

  const handleToggle = useCallback(
    (e) => {
      if (e.type === "keydown" && e.keyCode === "13") toggle();
      if (e.type === "click") toggle();
    },
    [toggle]
  );

  useEffect(() => {
    contentRef.current && setContentHeight(contentRef.current.scrollHeight);
  }, [contentRef]);

  return (
    <div className="about-links-mobile__wrapper">
      <div className="about-links-mobile__accordion">
        <div className="container about-links-mobile__container">
          <div className="about-links-mobile__accordion-wrapper">
            <button
              className="about-links-mobile__trigger"
              onClick={handleToggle}
            >
              <div className="about-links-mobile__title">О КОМПАНИИ</div>

              <Chevron
                className={`about-links-mobile__chevron ${
                  active ? "about-links-mobile__chevron--active" : null
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
        className="about-links-mobile__content"
        style={{ maxHeight: `${active ? contentHeight : 0}px` }}
      >
        <div className="about-links-mobile__ul">
          {jsonData &&
            jsonData.aboutNavLinks.map((link) => (
              <li
                className={`about-links-mobile__li ${
                  pathname === link.link
                    ? "about-links-mobile__li--active"
                    : null
                }`}
                key={`mobile-${link.title}`}
              >
                <div className="container about-links-mobile__li-container">
                  <Link
                    to={link.link}
                    className="about-links-mobile__link"
                    activeClassName="about-links-mobile__link--active"
                  >
                    <span className="about-links-mobile__link-wrapper">
                      {link.title}
                    </span>
                  </Link>
                </div>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutLinksMobile;
