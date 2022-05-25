import React from "react";
import { PortableText as BasePortableText } from "@portabletext/react";
import "./portable-text.scss";

const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="portable-text__p">{children}</p>,
    h2: ({ children }) => <h2 className="portable-text__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="portable-text__h3">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="portable-text__ul">{children}</ul>,
    number: ({ children }) => <ol className="portable-text__ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="portable-text__li">{children}</li>,
    number: ({ children }) => (
      <li className="portable-text__li portable-text__li--number">
        {children}
      </li>
    ),
  },
};

const PortableText = ({ data, noMargin }) => {
  return (
    <div className={`portable-text ${noMargin && "portable-text--no-margin"}`}>
      <BasePortableText value={data} components={portableTextComponents} />
    </div>
  );
};

export default PortableText;
