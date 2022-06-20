export default {
  name: "foundationOption",
  type: "object",
  title: "Варианты фундаментов / Foundation Option",
  fields: [
    {
      name: "type",
      title: "Вид Фундамента / Foundation Type",
      type: "reference",
      to: [{ type: "foundation" }],
    },
    {
      name: "cost",
      title: "Цена / Foundation Cost",
      type: "number",
      description:
        "Цена фундамента для этого проекта / Cost of the foundation type for this project.",
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
