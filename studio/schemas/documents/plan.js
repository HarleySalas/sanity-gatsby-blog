export default {
  name: "plan",
  type: "document",
  title: "Plan",
  liveEdit: false,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
      description: "Название проекта / Title of the Project",
      validation: (Rule) =>
        Rule.required().error("You must provide a project title."),
    },
    {
      name: "isActive",
      title: "Активный / Active",
      type: "boolean",
      description:
        "Нажмите на кнопку, чтобы проект отображался на сайте / Set to active when the project should be visible on the website.",
      initialValue: true,
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Опубликован / Published at",
    },
    {
      name: "slug",
      type: "slug",
      title: "Имя ссылки / Slug",
      description: "Название ссылки на проект / Slug/title of page link",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "type",
      type: "string",
      title: "Тип / Type",
      initialValue: "house",
      options: {
        list: [
          { title: "Дом", value: "house" },
          { title: "Баня", value: "bathhouse" },
        ],
      },
      validation: (Rule) => Rule.required().error("Type is required."),
    },
    //make it accept image
    {
      name: "blueprintsDisplay",
      type: "blueprintsDisplay",
      title: "Планы этажей / Blueprints",
    },
    //make sure it accepts images
    {
      name: "originalBlueprint",
      type: "file",
      title: "Оригинальные планы этажей / Blueprints",
      description:
        "План каждого этажа в формате PDF для скачивания / PDF Original, accurate blueprint for download.",
      accept: "pdf",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "О проекте / Excerpt",
      description:
        "Этот текст будет на страницах в поиске Яндекс или Google, когда люди делятся проектом в соцсетях / This ends up on summary pages, on Google, when people share the project on social media.",
    },
    {
      name: "categories",
      type: "array",
      title: "Категории / Categories",
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
      type: "string",
      title: "Цена / Price",
      description:
        "Базовая цена проекта в рублях, без какого-либо обозначения рубля / Base price of the project in rubles, without symbols of any form",
      validation: (Rule) =>
        Rule.required().error("A base price must be provided."),
    },
    {
      name: "bedrooms",
      type: "string",
      title: "Спальни / Bedrooms",
      description:
        "Количество спален. Можно в варьирующемся формате '3-4' без пробелов или просто одно число / Number of bedrooms. Can be provided in a range format, eg: '3-4', without spaces, or simply as a number.",
      // validation: (Rule) => [
      //   Rule.required().error(
      //     "You must indiciate the number of bedrooms available."
      //   ),
      //   Rule.max(5).error("Too many characters."),
      // ],
    },
    {
      name: "bathrooms",
      type: "string",
      title: "Санузлы / Bathrooms",
      description:
        "Количество санузлов. Можно в варьирующемся формате '3-4' без пробелов или просто одно число / Number of bathrooms. Can be provided in a range format, eg: '3-4', without spaces, or simply as a number.",
      // validation: (Rule) => [
      //   Rule.required().error(
      //     "You must indiciate the number of bathrooms available."
      //   ),
      //   Rule.max(5).error("Too many characters."),
      // ],
    },
    {
      name: "floors",
      type: "number",
      title: "Этажи / Floors",
      description: "Количество этажей / Number of floors.",
      // validation: (Rule) => Rule.required().error(""),
    },
    {
      name: "interiorSize",
      type: "number",
      title: "Жилая площадь / Living Space",
      description:
        "Метраж дома в квадратных метрах, только число / Living Space, measured in square meters.",
      // validation: (Rule) =>
      //   Rule.required().error(
      //     "You must provide the interior size of the home."
      //   ),
    },
    {
      name: "totalSize",
      type: "number",
      title: "Общая площадь дома / Total Size",
      description:
        "Размер дома в квадратных метрах, включая террасы, крыльцо, балконы и тд / Total size of the home, including porches, terraces and balconies, measured in square meters.",
      // validation: (Rule) =>
      //   Rule.required().error("You must provide the total size of the home."),
    },
    {
      name: "buildingArea",
      type: "number",
      title: "Площадь застройки / Building Area",
      description: "Length * Width",
      // validation: (Rule) =>
      //   Rule.required().error("You must provide the building area."),
    },
    {
      name: "constructionArea",
      type: "number",
      title: "Строительная площадь / Construction Area",
      description: "Length * Width for each floor",
    },
    {
      name: "totalArea",
      type: "array",
      title: "Размер дома / Total Area",
      description:
        "Размер дома в метрах, например, 10x12, каждый параметр как отдельное число, на отдельных строчках / Total area footprint of the home, measured in meters, eg: 10x12). Please provide each dimension as a number, separately.",
      of: [{ type: "number" }],
      // validation: (Rule) => [
      //   Rule.required().error("Total area is required."),
      //   Rule.length(2).error("You must provide exactly two numbers."),
      // ],
    },
    {
      name: "roomSpace",
      type: "number",
      title: "Площадь помещений / Room Space",
      description:
        "Метраж бани в квадратных метрах, только число. Только для бань. / Living Space, measured in square meters. Only used for bathhouses.",
      // validation: (Rule) =>
      //   Rule.required().error(
      //     "You must provide the interior size of the bathhouse."
      //   ),
    },
    {
      name: "description",
      type: "portableText",
      title: "Описание проекта / Project Description",
      validation: (Rule) =>
        Rule.required().error("There must be a project description."),
    },
    {
      name: "completedProjects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "completedProject" }] }],
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new => old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old => new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "titleAsc",
      title: "Titles, alphabetical, ascending",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Titles, alphabetical, descending",
      by: [
        {
          field: "title",
          direction: "desc",
        },
      ],
    },
  ],
};
