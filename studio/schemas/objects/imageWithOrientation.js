export default {
  name: "imageWithOrientation",
  type: "object",
  title: "Image with Orientation",
  fields: [
    {
      name: "orientation",
      title: "Orientation",
      type: "string",
      initialValue: "landscape",
      options: {
        list: [
          { title: "Landscape", value: "landscape" },
          { title: "Portrait", value: "portrait" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "alt",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
