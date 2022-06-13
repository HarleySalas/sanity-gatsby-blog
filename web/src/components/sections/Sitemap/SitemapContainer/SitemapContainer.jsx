import React from "react";
import "./sitemap-container.scss";

const SitemapContainer = ({ children }) => {
  return (
    <div className="sitemap-container">
      <div className="container sitemap-container__container">
        <div className="sitemap-container__wrapper">{children}</div>
      </div>
    </div>
  );
};

export default SitemapContainer;
