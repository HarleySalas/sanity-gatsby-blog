import React from "react";
import InlineLink from "../InlineLink/InlineLink";
import { PortableText as BasePortableText } from "@portabletext/react";
import "./portable-text.scss";
import AnnotatedImage from "../AnnotatedImage/AnnotatedImage";

const portableTextComponents = ({ document, guarantee }) => {
  return {
    block: {
      normal: ({ children }) => (
        <p
          className={`portable-text__p ${
            document ? "portable-text__p--document" : null
          }`}
        >
          {children}
        </p>
      ),
      h2: ({ children }) => <h2 className="portable-text__h2">{children}</h2>,
      h3: ({ children }) => <h3 className="portable-text__h3">{children}</h3>,
      indented: ({ children }) => (
        <p
          className={`portable-text__p ${
            document ? "portable-text__p--document" : null
          }`}
          style={{ marginLeft: "3rem" }}
        >
          {children}
        </p>
      ),
      blockEmphasis: ({ children }) => (
        <p className="portable-text__p portable-text__p--emphasis">
          <em>{children}</em>
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul
          className={`portable-text__ul ${
            guarantee ? "portable-text__ul--guarantee" : null
          }`}
        >
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="portable-text__ol">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="portable-text__li">{children}</li>
      ),
      number: ({ children }) => (
        <li className="portable-text__li portable-text__li--number">
          {children}
        </li>
      ),
    },
    marks: {
      em: ({ children }) => <em>{children}</em>,
      strong: ({ children }) => <strong>{children}</strong>,
      link: ({ value, children }) => {
        if ((value?.href || "").startsWith("http")) {
          return (
            <InlineLink external linkTo={value?.href}>
              {children}
            </InlineLink>
          );
        }

        if ((value?.href || "").startsWith("/")) {
          return <InlineLink linkTo={value?.href}>{children}</InlineLink>;
        }

        return { children };
      },
    },
    types: {
      annotatedImage: AnnotatedImage,
    },
  };
};

const PortableText = ({ data, noMargin, document, guarantee }) => {
  return (
    <div className={`portable-text ${noMargin && "portable-text--no-margin"}`}>
      <BasePortableText
        value={data}
        components={portableTextComponents({ document, guarantee })}
      />
    </div>
  );
};

export default PortableText;
