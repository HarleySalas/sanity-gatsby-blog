export default {
  name: "faq",
  type: "document",
  title: "FAQ",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "questions",
      type: "array",
      title: "Вопросы / Questions",
      of: [{ type: "question", title: "Вопросы / Questions" }],
    },
  ],
};
