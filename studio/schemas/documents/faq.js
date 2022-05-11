export default {
  name: "faq",
  type: "document",
  title: "FAQ",
  liveEdit: false,
  // __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "questions",
      type: "array",
      title: "Questions",
      of: [{ type: "question" }],
    },
  ],
};
