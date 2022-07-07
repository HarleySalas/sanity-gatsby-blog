export default {
  name: "annotatedImage",
  type: "object",
  title: "Картиника с описанием / Annotated Image",
  fields: [
    {
      name: "image",
      title: "Картинка / Image",
      type: "image",
    },
    {
      name: "alt",
      title: "Альтернативный текст / Alternative text",
      type: "string",
    },
    {
      name: "annotations",
      title: "Описания / Annotations",
      type: "array",
      of: [{ type: "annotation" }],
    },
  ],
};
