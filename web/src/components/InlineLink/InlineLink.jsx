import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import "./inline-link.scss";

const InlineLink = ({
  linkTo,
  children,
  className,
  spanClassName,
  external,
  sameWeight,
}) => {
  const linkRef = useRef(null);
  const [linkColor, setLinkColor] = useState(null);
  const [fontWeight, setFontWeight] = useState(null);

  useEffect(() => {
    const modifyStyles = setTimeout(() => {
      const styles = linkRef.current ? getComputedStyle(linkRef.current) : null;
      setLinkColor(styles && styles.color ? styles.color : null);
      setFontWeight(
        sameWeight
          ? styles && styles.fontWeight
            ? styles.fontWeight
            : 400
          : Number(styles && styles.fontWeight ? styles.fontWeight : 400) + 100
      );
    }, 300);

    return () => clearTimeout(modifyStyles);
  }, [sameWeight]);

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
