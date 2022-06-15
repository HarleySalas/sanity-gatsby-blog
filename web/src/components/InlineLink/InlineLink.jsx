import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import "./inline-link.scss";

const InlineLink = ({
  linkTo,
  children,
  className,
  spanClassName,
  external,
}) => {
  const linkRef = useRef(null);
  const [linkColor, setLinkColor] = useState(null);
  const [fontWeight, setFontWeight] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const styles = getComputedStyle(linkRef.current);
      setLinkColor(styles.color);
      setFontWeight(Number(styles.fontWeight) + 100);
    }, 300);
  }, []);

  const internals = (
    <>
      <span className={`inline-link__span ${spanClassName || null}`}>
        {children}
      </span>
      <span
        className="inline-link__underline"
        style={{ backgroundColor: linkColor }}
      ></span>
    </>
  );

  return (
    <>
      {external ? (
        <a
          href={linkTo}
          className="inline-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {internals}
        </a>
      ) : (
        <Link
          to={linkTo}
          className={`inline-link ${className || null}`}
          style={{ fontWeight: fontWeight }}
          ref={linkRef}
        >
          {internals}
        </Link>
      )}
    </>
  );
};

export default InlineLink;
