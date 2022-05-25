import React from "react";
import "./articles-list.scss";
import ArticlePreview from "./ArticlePreview/ArticlePreview";

const ArticlesList = ({ posts }) => {
  return (
    <section className="articles-list">
      <div className="container articles-list__container">
        <div className="articles-list__ul">
          {posts &&
            posts.map((post) => <ArticlePreview post={post} key={post._id} />)}
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
