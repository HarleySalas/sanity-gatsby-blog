export default {
  name: "howWeWork",
  type: "document",
  title: "How We Work",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "steps",
      type: "array",
      title: "Steps",
      of: [{ type: "titledText" }],
    },
    {
      name: "message",
      type: "simplePortableText",
      title: "Message",
    },
  ],
};
