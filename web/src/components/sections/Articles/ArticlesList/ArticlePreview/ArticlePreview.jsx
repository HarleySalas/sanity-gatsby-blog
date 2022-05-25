import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";
import "./article-preview.scss";
import { useDate } from "../../../../../hooks";

import PortableText from "../../../../PortableText/PortableText";
import ArrowStroke from "../../../../../assets/icons/arrow-stroke.svg";

const ArticlePreview = ({ post }) => {
  const date = useDate(post.publishedAt);

  return (
    <li className="article-preview">
      <Link
        to={`/article/${post.slug.current}`}
        className="article-preview__link"
      >
        <div className="article-preview__container">
          <div className="article-preview__image-wrapper">
            <SanityImage
              {...post.mainImage}
              width={570}
              height={270}
              className="article-preview__image"
              config={{
                fit: "clip",
              }}
            />
            <div className="article-preview__image__overlay">
              <ArrowStroke className="article-preview__image__overlay__arrow" />
            </div>
          </div>
          <div className="article-preview__content">
            <div className="article-preview__content__sub-title">
              <div className="article-preview__content__category">
                {post.categories[0].title}
              </div>
              <div className="article-preview__content__date">{date}</div>
            </div>
            <h2 className="article-preview__content__title">{post.title}</h2>
            <div className="article-preview__content__excerpt">
              <PortableText data={post._rawExcerpt} noMargin />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticlePreview;
