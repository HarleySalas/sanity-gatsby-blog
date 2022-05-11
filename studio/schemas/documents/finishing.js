export default {
  name: "finishing",
  type: "document",
  title: "Finishing",
  liveEdit: false,
  fields: [
    {
      name: "type",
      type: "string",
      title: "Finishing Type",
      description: "Name of finishing type",
      validation: (Rule) =>
        Rule.required().error("You must indicate the finishing name."),
    },
    {
      name: "description",
      title: "Description",
      description: "Brief description of the finishing type",
      type: "simplePortableText",
    },
    {
      name: "icon",
      title: "Icon",
      description: "Icon depicting the finishing type",
      type: "svgUpload",
      validation: (Rule) =>
        Rule.error("You must provide an SVG Icon.").required(),
    },
  ],
};
