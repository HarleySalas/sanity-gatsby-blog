export default {
  name: "featuredProject",
  type: "document",
  title: "Site Settings",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "featured",
      title: "Популярный проект / Featured Project",
      description:
        "Этот проект будет отображаться как популярный на главной странице / This project will be featured on the Home Page.",
      type: "reference",
      to: {
        type: "project",
      },
    },
  ],
};
