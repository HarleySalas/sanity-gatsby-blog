export default {
  name: "featuredProjects",
  type: "document",
  title: "Site Settings",
  liveEdit: false,
  __experimental_actions: ["update", /* "create", */ /* "delete", */ "publish"],
  fields: [
    {
      name: "featuredProjects",
      title: "Популярный проекты / Featured Projectы",
      description:
        "(Update Russian translation) Этот проект будет отображаться как популярный на главной странице / This project will be featured on the Home Page.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: (Rule) => [Rule.min(4), Rule.max(12)],
    },
  ],
};
