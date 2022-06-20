export default {
  name: "mainImage",
  type: "image",
  title: "Картинка / Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Подпись / Caption",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Альтернативный текст / Alternative text",
      description: "Важно для SEO / Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      caption: "caption",
      originalFilename: "asset.originalFilename",
    },
    prepare(selection) {
      const { imageUrl, caption, originalFilename } = selection;

      return {
        imageUrl,
        title: `${caption ? caption : originalFilename}`,
      };
    },
  },
};
