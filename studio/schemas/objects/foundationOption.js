export default {
  name: "foundationOption",
  type: "object",
  title: "Foundation Option",
  fields: [
    {
      name: "type",
      title: "Foundation Type",
      type: "reference",
      to: [{ type: "foundation" }],
    },
    {
      name: "cost",
      title: "Foundation Cost",
      type: "number",
      description: "Cost of the foundation type for this project.",
    },
  ],
  preview: {
    select: {
      type: "type.name",
      cost: "cost",
      image: "type.image.asset",
    },
    prepare(selection) {
      const { type, cost, image } = selection;
      return {
        title: `${type} - ${cost} ₽`,
        media: image,
      };
    },
  },
};
