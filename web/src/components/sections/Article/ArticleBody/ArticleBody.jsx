import React from "react";
import { Link } from "gatsby";
import PortableText from "../../../PortableText/PortableText";
import "./article-body.scss";
import { useDate, useMediaQuery } from "../../../../hooks";

import ArrowStroke from "../../../../assets/icons/arrow-stroke.svg";

const ArticleBody = ({ title, category, publishedAt, body }) => {
  const isNotPhone = useMediaQuery("(min-width: 37.5em)");
  const date = useDate(publishedAt);
  return (
    <article className="article-body">
      <div className="article-body__wrapper">
        <div className="container article-body__container">
          {isNotPhone ? (
            <div className="article-body__body-wrapper">
              <div className="article-body__back-wrapper">
                <Link to="/articles" className="article-body__back">
                  <ArrowStroke className="article-body__back__arrow" /> Назад к
                  статьям
                </Link>
              </div>
              <div className="article-body__category-wrapper">
                <div className="article-body__category">{category}</div>
                <div className="article-body__date">{date}</div>
              </div>
              <h1 className="article-body__title">{title}</h1>
              <div className="article-body__body">
                <PortableText data={body} noMargin />
              </div>
            </div>
          ) : (
            <div className="article-body__body-wrapper-phone">
              <div className="article-body__back-wrapper">
                <Link to="/articles" className="article-body__back">
                  <ArrowStroke className="article-body__back__arrow" /> Назад к
                  статьям
                </Link>
              </div>
              <div className="article-body__category-wrapper">
                <div className="article-body__category">{category}</div>
                <div className="article-body__date">{date}</div>
              </div>
              <h1 className="article-body__title">{title}</h1>
              <div className="article-body__body">
                <PortableText data={body} noMargin />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleBody;
