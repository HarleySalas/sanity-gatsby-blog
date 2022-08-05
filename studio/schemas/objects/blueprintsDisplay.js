export default {
  name: "blueprintsDisplay",
  title: "Blueprints Display",
  type: "object",
  fields: [
    {
      name: "blueprints",
      type: "array",
      of: [
        {
          name: "images",
          title: "Images",
          type: "imageWithOrientationArray",
        },
        {
          name: "svgs",
          title: "SVGs",
          type: "svgArray",
        },
      ],
      validation: (Rule) => Rule.min(1).max(1),
    },
  ],
};
