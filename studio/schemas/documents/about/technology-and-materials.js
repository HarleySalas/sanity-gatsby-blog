export default {
  name: "technologyAndMaterials",
  type: "document",
  title: "Технологии и материалы / Technology and Materials",
  liveEdit: false,
  __experimental_actions: ["update", /* 'create',/* 'delete', */ "publish"],
  fields: [
    {
      name: "content",
      type: "portableText",
      title: "Содержание / Content",
    },
  ],
};
