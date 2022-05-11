export default {
  name: "project",
  type: "document",
  title: "Project",
  liveEdit: false,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Project Name",
      description: "Название проекта / Name of the Project",
      validation: (Rule) =>
        Rule.required().error("You must provide a project name."),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description:
        "Set to active when the project should be visible on the website.",
      initialValue: true,
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Slug/name of page link",
      options: {
        source: "projectName",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      type: "mainImage",
      description:
        "Main image, to be displayed first, as well as in previews of the project.",
      title: "Main Image",
      validation: (Rule) =>
        Rule.required().error("You must provide a main image."),
    },
    {
      name: "otherImages",
      type: "array",
      description: "Other images of the project, not including the main image.",
      of: [{ type: "mainImage" }],
    },
    {
      name: "blueprintsDisplay",
      type: "array",
      description:
        "Blueprints of each floor, in SVG format, to be displayed on the page.",
      of: [{ type: "svgWithPreview" }],
    },
    {
      name: "originalBlueprint",
      type: "file",
      description: "PDF Original, accurate blueprint for download.",
      accept: "pdf",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share the project on social media.",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "projectCategory",
          },
        },
      ],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      description:
        "Base price of the project in rubles, without symbols of any form",
      validation: (Rule) =>
        Rule.required().error("A base price must be provided."),
    },
    {
      name: "bedrooms",
      type: "string",
      title: "Bedrooms",
      description:
        "Number of bedrooms. Can be provided in a range format, eg: '3-4', without spaces, or simply as a number.",
      validation: (Rule) => [
        Rule.required().error(
          "You must indiciate the number of bedrooms available."
        ),
        Rule.max(5).error("Too many characters."),
      ],
    },
    {
      name: "bathrooms",
      type: "string",
      title: "Bathrooms",
      description:
        "Number of bathrooms. Can be provided in a range format, eg: '3-4', without spaces, or simply as a number.",
      validation: (Rule) => [
        Rule.required().error(
          "You must indiciate the number of bathrooms available."
        ),
        Rule.max(5).error("Too many characters."),
      ],
    },
    {
      name: "Floors",
      type: "number",
      title: "Floors",
      description: "Number of floors.",
      validation: (Rule) => Rule.required().error(""),
    },
    {
      name: "interiorSize",
      type: "number",
      title: "Interior Size",
      description: "Interior size, measured in square meters.",
      validation: (Rule) =>
        Rule.required().error(
          "You must provide the interior size of the home."
        ),
    },
    {
      name: "totalSize",
      type: "number",
      title: "Total Size",
      description:
        "Total size of the home, including porches, terraces and balconies, measured in square meters.",
      validation: (Rule) =>
        Rule.required().error("You must provide the total size of the home."),
    },
    {
      name: "totalArea",
      type: "array",
      title: "Total Area",
      description:
        "Total area footprint of the home, measured in meters, eg: 10x12). Please provide each dimension as a number, separately.",
      of: [{ type: "number" }],
      validation: (Rule) => [
        Rule.required().error("Total area is required."),
        Rule.length(2).error("You must provide exactly two numbers."),
      ],
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Project Description",
      validation: (Rule) =>
        Rule.required().error("There must be a project description."),
    },
    {
      name: "foundations",
      title: "Foundations",
      description: "Foundations available for this project.",
      type: "array",
      of: [{ type: "foundationOption" }],
      validation: (Rule) =>
        Rule.custom((foundations) => {
          if (typeof foundations === "undefined") {
            return true; //allow undefined values
          }

          const foundationsContainsABase = (arr) => {
            return arr.some((value) => value["cost"] === 0);
          };

          return foundationsContainsABase(foundations)
            ? true
            : "There must be at least one foundation with a base value of 0.";
        }),
    },
  ],
};
