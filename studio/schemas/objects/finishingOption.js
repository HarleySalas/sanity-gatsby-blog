export default {
  name: "finishingOption",
  type: "object",
  title: "Finishing Option",
  fields: [
    {
      name: "type",
      title: "Finishing Type",
      type: "string",
      description: `Вид отделки, обычно "без отделки" или "с отделкой"`,
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Description",
      description:
        "Optional description of the option, usually a paragraph, or so long.",
    },
    {
      name: "features",
      type: "array",
      of: [
        {
          type: "featureOption",
        },
      ],
    },
    {
      name: "cost",
      title: "Cost",
      type: "number",
      description:
        "Cost of the finishing type for this project. Unfinished is always 0.",
    },
  ],
  preview: {
    select: {
      type: "type",
      cost: "cost",
    },
    prepare(selection) {
      const { type, cost } = selection;
      return {
        title: `${type} - ${cost} ₽`,
      };
    },
  },
};
