export default {
  name: "foundation",
  type: "document",
  title: "Foundation",
  liveEdit: false,
  fields: [
    {
      name: "type",
      type: "string",
      title: "Foundation Type",
      description: "Name of foundation type",
      validation: (Rule) =>
        Rule.required().error("You must indicate the foundation name."),
    },
    {
      name: "description",
      title: "Description",
      description: "Brief description of the foundation type",
      type: "simplePortableText",
    },
    {
      name: "image",
      title: "Image",
      description: "Image depicting the foundation type",
      type: "image",
      validation: (Rule) =>
        Rule.error("You must provide a foundation image.").required(),
      options: {
        accept: ".png"
      }
    },
  ],
};
