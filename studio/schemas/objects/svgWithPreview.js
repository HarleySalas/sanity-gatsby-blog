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
      type: "text",
      name: "rawSvg",
      title: "Raw SVG",
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
