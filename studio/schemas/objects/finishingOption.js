export default {
  name: "finishingOption",
  type: "object",
  title: "Варианты отделки / Finishing Option",
  fields: [
    {
      name: "type",
      title: "Вид отделки / Finishing Type",
      type: "string",
      description: `Вид отделки, обычно "без отделки", "черновая отделка" или "чистовая отделка"`,
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Описание / Description",
      description:
        "Необязательное описание варианта, обычно абзац / Optional description of the option, usually a paragraph, or so long.",
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
      title: "Цена / Cost",
      type: "number",
      description:
        "Цена за отделку, без отделки всегда 0 / Cost of the finishing type for this project. Unfinished is always 0.",
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
