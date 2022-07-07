import React from "react";
import "./about-links.scss";
import { useMediaQuery } from "../../../../../hooks";
import AboutLinksMobile from "./AboutLinksMobile/AboutLinksMobile";
import AboutLinksDesktop from "./AboutLinksDesktop/AboutLinksDesktop";

const AboutLinks = () => {
  const isDesktop = useMediaQuery("(min-width: 87.5em)");

  return (
    <section className="about-links">
      {isDesktop ? <AboutLinksDesktop /> : <AboutLinksMobile />}
    </section>
  );
};

export default AboutLinks;
