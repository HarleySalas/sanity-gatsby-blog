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
        {posts.length < 1 && (
          <div className="articles-list__not-found">No Articles Found</div>
        )}
      </div>
    </section>
  );
};

export default ArticlesList;
