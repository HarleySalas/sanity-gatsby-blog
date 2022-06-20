export default {
  name: "aboutUs",
  type: "document",
  title: "About Us",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "body",
      type: "bodyPortableText",
      title: "О компании",
    },
  ],
};
