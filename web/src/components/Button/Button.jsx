import React from "react";
import { Link } from "gatsby";
import "./button.scss";
import ArrowStroke from "../../assets/icons/arrow-stroke.svg";

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
  arrowRight,
  download,
  center,
  ...props
}) => {
  const btnClasses = `
        button

        ${!btnSize && "button--md"}
        ${btnSize === "sm" && "button--sm"}
        ${btnSize === "md" && "button--md"}
        ${btnSize === "lg" && "button--lg"}

        ${!btnColor && "button--primary"}
        ${btnColor === "primary" && "button--primary"}
        ${btnColor === "black" && "button--black"}
        ${btnColor === "grey" && "button--grey"}

        ${!btnStyle && "button--default"}
        ${btnStyle === "default" && "button--default"}
        ${btnStyle === "outline" && "button--outline"}
        ${btnStyle === "rounded" && "button--rounded"}
        ${btnStyle === "rounded-outline" && "button--rounded-outline"}
    `;

  let btnElement = (
    <button
      className={btnClasses}
      onClick={onClick}
      ref={btnRef}
      aria-label={children}
      {...props}
    >
      {arrowRight ? (
        <div className="button__icon-wrapper">
          {children}{" "}
          <ArrowStroke className="button__icon button__icon__arrow-right" />
        </div>
      ) : (
        children
      )}
    </button>
  );

  if (linkTo) {
    btnElement = (
      <Link to={linkTo} aria-label={children}>
        {btnElement}
      </Link>
    );
  }

  if (download) {
    btnElement = (
      <a href={download} aria-label={children}>
        {btnElement}
      </a>
    );
  }

  if (!fullWidth) {
    btnElement = (
      <div
        className={`button__wrapper ${
          center ? "button__wrapper--center" : null
        }`}
      >
        {btnElement}
      </div>
    );
  }

  return btnElement;
};

export default Button;
