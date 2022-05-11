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
};
