import React from "react";
import { Link } from "gatsby";
import "./articles-categories.scss";

const ArticlesCategories = ({ categories }) => {
  return (
    <div className="articles-categories">
      <div className="container articles-categories__container">
        <div className="articles-categories__wrapper">
          <div className="articles-categories__title">Выберите категорию</div>
          <nav className="articles-categories__nav">
            <ul className="articles-categories__ul">
              <li className="articles-categories__li">
                <Link
                  to="/articles"
                  className="articles-categories__link"
                  activeClassName="articles-categories__link--active"
                >
                  Все
                </Link>
              </li>
              {categories &&
                categories.map((category) => (
                  <li className="articles-categories__li" key={category._id}>
                    <Link
                      to={`/articles/category/${category.slug.current}`}
                      activeClassName="articles-categories__link--active"
                      className="articles-categories__link"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCategories;
