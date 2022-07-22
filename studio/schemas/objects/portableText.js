import React from "react";

const Indented = (props) => (
  <p style={{ marginLeft: "2rem" }}>{props.children}</p>
);

const BlockEmphasis = (props) => (
  <p style={{ marginLeft: "2.4rem", marginRight: "2.4rem" }}>
    <em>{props.children}</em>
  </p>
);

const DisplayText = (props) => (
  <p style={{ color: "#8B8B8F", fontSize: "20px" }}>{props.children}</p>
);

export default {
  name: "portableText",
  type: "array",
  title: "Portable Text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        {
          title: "Indented",
          value: "indented",
          blockEditor: {
            render: Indented,
          },
        },
        {
          title: "Block-Emphasis",
          value: "blockEmphasis",
          blockEditor: {
            render: BlockEmphasis,
          },
        },
        {
          title: "Display-Text",
          value: "displayText",
          blockEditor: {
            render: DisplayText,
          },
        },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],

        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
              },
            ],
          },
        ],
      },
    },
    {
      type: "mainImage",
      options: { hotspot: true },
    },
    {
      type: "annotatedImage",
    },
  ],
};
