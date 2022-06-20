export default {
  name: "titledText",
  type: "object",
  title: "Текст с названием / Text with Title",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Название / Title",
    },
    {
      name: "text",
      type: "simplePortableText",
      title: "Текст / Text",
    },
  ],
};
