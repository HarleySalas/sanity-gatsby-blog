export default {
  name: "sale",
  type: "document",
  title: "Акция / Sale",
  liveEdit: false,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Название акции / Name of the Sale",
      description:
        "Для внутреннего использования, не отображается на сайте / For internal reference, not displayed on website.",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "text",
      type: "text",
      title: "Текст / Text",
      description: "Пояснение к акции / Explanation of the Sale",
    },
    {
      name: "description",
      title: "Description",
      type: "portableText",
    },
    {
      name: "enddate",
      type: "datetime",
      title: "Дата окончания акции / End Date",
      description:
        "На сайте отображается та акция, у которой более поздняя дата / Date that the sale will end. The сurrent sale on the website is newest date.",
    },
  ],
  orderings: [
    {
      name: "endDateAsc",
      title: "End date new->old",
      by: [
        {
          field: "enddate",
          direction: "asc",
        },
      ],
    },
  ],
};
