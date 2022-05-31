import React from "react";
import PortableText from "../../../PortableText/PortableText";
import { Link } from "gatsby";
import { useDate } from "../../../../hooks";
import "./home-latest-post.scss";
import ArrowStroke from "../../../../assets/icons/arrow-stroke.svg";
import Button from "../../../Button/Button";

const HomeLatestPost = ({ latestPost }) => {
  const date = useDate(latestPost.publishedAt);
  return latestPost ? (
    <section className="home-latest-post">
      {/* <div className="home-latest-post__content__img-wrapper">
        <SanityImage
          {...latestPost.mainImage}
          className="home-latest-post__content__img"
          width={1200}
        />
        <div className="home-latest-post__content__img-overlay"></div>
      </div> */}
      <div className="container home-latest-post__container">
        <h2 className="home-latest-post__title">Новая статья</h2>
        <div className="home-latest-post__content">
          <div className="home-latest-post__content__subtitle">
            <div className="home-latest-post__content__category">
              {latestPost.categories[0].title}
            </div>
            <div className="home-latest-post__content__date">{date}</div>
          </div>
          <div className="home-latest-post__content__title">
            {latestPost.title}
          </div>
          <div className="home-latest-post__content__excerpt">
            <PortableText data={latestPost._rawExcerpt} noMargin />
          </div>
          <Button
            linkTo={`/article/${latestPost.slug.current}`}
            btnColor="grey"
            btnSize="sm"
            arrowRight
            center
          >
            Читать далее
          </Button>
          <div className="home-latest-post__content__link-wrapper">
            <Link to="/articles" className="home-latest-post__content__link">
              Все проекты
              <ArrowStroke className="home-latest-post__content__link__arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeLatestPost;
