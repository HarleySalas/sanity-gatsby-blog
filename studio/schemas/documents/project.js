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
      description: "Название ссылки на проект / Slug/name of page link",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Картинки / Images",
      description:
        "Загрузите картинки проекта. Первая картинка будет использоваться как главная / Images of the project. The first image will be used as the primary image.",
      of: [{ type: "mainImage" }],
    },
    {
      name: "blueprintsDisplay",
      type: "array",
      title: "Планы этажей / Blueprints",
      description:
        "План каждого этажа в SVG формате для отображения на странице проекта / Blueprints of each floor, in SVG format, to be displayed on the page.",
      of: [{ type: "svgWithPreview" }],
    },
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
      type: "number",
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
      title: "Санузлы / Bathrooms",
      description:
        "Количество санузлов. Можно в варьирующемся формате '3-4' без пробелов или просто одно число / Number of bathrooms. Can be provided in a range format, eg: '3-4', without spaces, or simply as a number.",
      validation: (Rule) => [
        Rule.required().error(
          "You must indiciate the number of bathrooms available."
        ),
        Rule.max(5).error("Too many characters."),
      ],
    },
    {
      name: "floors",
      type: "number",
      title: "Этажи / Floors",
      description: "Количнство этажей / Number of floors.",
      validation: (Rule) => Rule.required().error(""),
    },
    {
      name: "interiorSize",
      type: "number",
      title: "Жилая площадь / Living Space",
      description:
        "Метраж дома в квадратных метрах, только число / Living Space, measured in square meters.",
      validation: (Rule) =>
        Rule.required().error(
          "You must provide the interior size of the home."
        ),
    },
    {
      name: "totalSize",
      type: "number",
      title: "Общая площадь дома / Total Size",
      description:
        "Размер дома в квадратных метрах, включая террасы, крыльцо, балконы и тд / Total size of the home, including porches, terraces and balconies, measured in square meters.",
      validation: (Rule) =>
        Rule.required().error("You must provide the total size of the home."),
    },
    {
      name: "buildingArea",
      type: "number",
      title: "Площадь застройки / Building Area",
      description: "Length * Width",
      validation: (Rule) =>
        Rule.required().error("You must provide the building area."),
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
      validation: (Rule) => [
        Rule.required().error("Total area is required."),
        Rule.length(2).error("You must provide exactly two numbers."),
      ],
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Описание проекта / Project Description",
      validation: (Rule) =>
        Rule.required().error("There must be a project description."),
    },
    {
      name: "finishingOptions",
      title: "Виды отделки / Finishing Options",
      description:
        "Доступные виды отделки для проекта / Finishing options available for this project.",
      type: "array",
      of: [{ type: "finishingOption" }],
      validation: (Rule) =>
        Rule.custom((finishingOptions) => {
          if (typeof finishingOptions === "undefined") {
            return true;
          }

          const finishingOptionsContainsABase = (arr) => {
            return arr.some((value) => value["cost"] === 0);
          };

          return finishingOptionsContainsABase(finishingOptions)
            ? true
            : "There must be at least one option with a base price of 0.";
        }),
    },
    {
      name: "foundations",
      title: "Фундаменты / Foundations",
      description:
        "Доступные виды фундаментов для проекта / Foundations available for this project.",
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
          field: "name",
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
          field: "name",
          direction: "asc",
        },
      ],
    },
    {
      name: "nameAsc",
      title: "Names, alphabetical, ascending",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      name: "nameDesc",
      title: "Names, alphabetical, descending",
      by: [
        {
          field: "name",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {
      name: "name",
      images: "images",
    },
    prepare(selection) {
      const { name, images } = selection;

      if (images) {
        const image = images[0].asset;
        return {
          title: name,
          media: image,
        };
      } else {
        return {
          title: name,
        };
      }
    },
  },
};
