export default {
  name: "simplePortableText",
  type: "array",
  title: "Simple Portable Text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Quote", value: "blockquote" },
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
                type: "url",
              },
            ],
          },
        ],
      },
    },
  ],
};
