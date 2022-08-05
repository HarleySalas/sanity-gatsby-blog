export default {
  name: "imageWithOrientationArray",
  title: "Image with Orientation Array",
  type: "object",
  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "imageWithOrientation" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
