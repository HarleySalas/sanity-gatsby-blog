import React from "react";
import { Link } from "gatsby";
import "./sitemap-link.scss";

const SitemapLink = ({ children, linkTo }) => {
  return (
    <li className="sitemap-link">
      <Link to={linkTo} className="sitemap-link__link">
        {children}
      </Link>
    </li>
  );
};

export default SitemapLink;
