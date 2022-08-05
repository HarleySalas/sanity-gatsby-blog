export default {
  name: "svgArray",
  title: "SVG Array",
  type: "object",
  fields: [
    {
      name: "svgs",
      type: "array",
      of: [{ type: "file", options: { accept: ".svg" } }],
      options: {
        layout: "grid",
      },
    },
  ],
};
