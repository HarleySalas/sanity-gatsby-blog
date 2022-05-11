export default {
  name: "finishingOption",
  type: "object",
  title: "Finishing Option",
  fields: [
    {
      name: "type",
      title: "Finishing Type",
      type: "reference",
      to: [{ type: "finishing" }],
    },
    {
      name: "cost",
      title: "Finishing",
      type: "number",
      description: "Cost of the finishing type for this project.",
    },
  ],
};
