import React from "react";
import "./sitemap-category.scss";
import SitemapLink from "../SitemapLink/SitemapLink";

const SitemapCategory = ({ title, data }) => {
  return (
    <div className="sitemap-category">
      <h2 className="sitemap-category__title">{title}</h2>
      <ul className="sitemap-category__ul">
        {data
          ? data.map((item, index) => (
              <SitemapLink key={item._id ? item._id : index} linkTo={item.link}>
                {item.title}
              </SitemapLink>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SitemapCategory;
