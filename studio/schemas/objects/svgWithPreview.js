export default {
  type: "object",
  name: "svgWithPreview",
  title: "SVG with an image preview",
  fields: [
    {
      type: "svgUpload",
      name: "svg",
      title: "SVG",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Image file, matching the SVG",
      options: {
        accept: ".png, .jpg, .jpeg",
      },
    },
  ],
};
