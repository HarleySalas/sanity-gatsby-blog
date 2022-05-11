export default {
  name: "license",
  type: "document",
  title: "Licenses",
  liveEdit: false,
  fields: [
    {
      name: "type",
      type: "string",
      title: "License Type",
      description: "Title of the license",
    },
    {
      name: "file",
      type: "file",
      title: "File",
      description: "PDF File of the license",
      accept: "pdf",
    },
    {
      name: "preview",
      type: "image",
      title: "License preview image",
      description:
        "First page of the license in png/jpeg, for preview purposes.",
      accept: "png, jpeg, jpg",
    },
  ],
};
