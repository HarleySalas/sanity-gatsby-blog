export default {
  name: "svgUploadArray",
  title: "SVG Upload Array",
  type: "object",
  fields: [
    {
      name: "svgs",
      type: "array",
      of: [{ type: "svgUploadv2" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
