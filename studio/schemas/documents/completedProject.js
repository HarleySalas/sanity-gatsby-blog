export default {
  name: "completedProject",
  type: "document",
  title: "Completed Project",
  liveEdit: false,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
      description: "Название проекта / Title of the Project",
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
      title: "Project Completion Date",
      name: "projectCompletionDate",
      type: "seasonYearPicker",
    },
    {
      name: "slug",
      type: "slug",
      title: "Имя ссылки / Slug",
      description: "Название ссылки на проект / Slug/name of page link",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "array",
      of: [
        {
          name: "individualProject",
          title: "Individual Project/Индивидуальный проект",
          type: "object",
          fields: [
            {
              type: "string",
              name: "text",
              initialValue: "Индивидуальный проект",
            },
          ],
        },
        {
          name: "mrsProject",
          title: "MRS Project",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: (Rule) => Rule.min(1).max(1),
    },
    {
      name: "description",
      type: "portableText",
      title: "Описание проекта / Project Description",
      validation: (Rule) =>
        Rule.required().error("There must be a project description."),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "imageWithOrientation" }],
    },
    {
      name: "relatedProject",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "relatedPlan",
      type: "reference",
      to: [{ type: "plan" }],
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
      title: "Names, alphabetical, ascending",
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
  preview: {
    select: {
      title: "title",
      images: "images",
    },
    prepare(selection) {
      const { title, images } = selection;

      if (images) {
        const image = images[0].image.asset;
        return {
          title: title,
          media: image,
        };
      } else {
        return {
          title: title,
        };
      }
    },
  },
};
