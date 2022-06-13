import React from "react";
import InlineLink from "../../InlineLink/InlineLink";
import "./not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container not-found__container">
        <div className="not-found__error">404: Страница не найдена</div>
        <h2 className="not-found__title">
          Страница, которую вы искали, не существует или не найдена.
        </h2>
        <div className="not-found__subtitle">
          Вернуться на <InlineLink linkTo="/">главную</InlineLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
