import React from "react";
import { Link } from "gatsby";
import "./button.scss";

const Button = ({
  children,
  btnStyle,
  btnSize,
  btnColor,
  btnIcon,
  linkTo,
  onClick,
  btnRef,
  fullWidth,
}) => {
  const btnClasses = `
        button

        ${!btnStyle && "button--default"}
        ${btnStyle === "default" && "button--default"}
        ${btnStyle === "outline" && "button--outline"}
        ${btnStyle === "rounded" && "button--rounded"}
        ${btnStyle === "rounded-outline" && "button--rounded-outline"}

        ${!btnSize && "button--md"}
        ${btnSize === "sm" && "button--sm"}
        ${btnSize === "md" && "button--md"}
        ${btnSize === "lg" && "button--lg"}

        ${!btnColor && "button--primary"}
        ${btnColor === "primary" && "button--primary"}
        ${btnColor === "black" && "button--black"}
        ${btnColor === "grey" && "button--grey"}
    `;

  let btnElement = (
    <button
      className={btnClasses}
      onClick={onClick}
      ref={btnRef}
      aria-label={children}
    >
      {children}
    </button>
  );

  if (linkTo) {
    btnElement = (
      <Link to={linkTo} aria-label={children}>
        {btnElement}
      </Link>
    );
  }

  if (!fullWidth) {
    btnElement = <div className="button__wrapper">{btnElement}</div>;
  }

  return btnElement;
};

export default Button;
