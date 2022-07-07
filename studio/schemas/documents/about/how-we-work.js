export default {
  name: "howWeWork",
  type: "document",
  title: "How We Work",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "guarantees",
      type: "array",
      title: "Гарантии / Guarantees",
      of: [
        {
          type: "titledText",
          title: "Guarantee",
        },
      ],
    },
    {
      name: "steps",
      type: "array",
      title: "Этапы работы с клиентом / Steps of work",
      of: [
        {
          type: "titledText",
          title: "Этап / Step",
        },
      ],
    },
    {
      name: "message",
      type: "simplePortableText",
      title: "Текст под этапами / Text",
    },
  ],
};
