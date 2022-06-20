export default {
  name: "license",
  type: "document",
  title: "Licenses",
  liveEdit: false,
  fields: [
    {
      name: "type",
      type: "string",
      title: "Тип лицензии / License Type",
      description: "Название лицензии / Title of the license",
    },
    {
      name: "file",
      type: "file",
      title: "Файл / File",
      description: "Загрузите файл в формате PDF / PDF File of the license",
      accept: "pdf",
    },
    {
      name: "preview",
      type: "image",
      title: "Предпросмотр лицензии / License preview image",
      description:
        "Загрузите файл в формате png/jpeg / First page of the license in png/jpeg, for preview purposes.",
      accept: "png, jpeg, jpg",
    },
  ],
};
