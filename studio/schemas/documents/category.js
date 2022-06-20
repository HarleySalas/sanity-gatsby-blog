export default {
  name: "category",
  type: "document",
  title: "Category",
  liveEdit: false,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Название категории / Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Имя ссылки / Slug",
      options: {
        // add a button to generate slug from the title field
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Описание / Description",
    },
  ],
};
