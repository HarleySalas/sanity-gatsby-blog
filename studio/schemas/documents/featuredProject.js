export default {
  name: "featuredProject",
  type: "document",
  title: "Site Settings",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "featured",
      title: "Featured Project",
      description: "This project will be featured on the Home Page.",
      type: "reference",
      to: {
        type: "project",
      },
    },
  ],
};
