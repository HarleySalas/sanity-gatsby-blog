export default {
  name: "foundation",
  type: "document",
  title: "Foundation",
  liveEdit: false,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Тип фундамента / Foundation Type",
      description: "Название типа фундамента / Name of foundation type",
      validation: (Rule) =>
        Rule.required().error("You must indicate the foundation name."),
    },
    {
      name: "description",
      title: "Описание / Description",
      description:
        "Краткое описание фундамента / Brief description of the foundation type",
      type: "simplePortableText",
    },
    {
      name: "image",
      title: "Картинка / Image",
      description:
        "Картинка этого типа фундамента / Image depicting the foundation type",
      type: "image",
      validation: (Rule) =>
        Rule.error("You must provide a foundation image.").required(),
      options: {
        accept: ".png",
      },
    },
  ],
};
