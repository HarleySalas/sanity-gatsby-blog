import { format } from "date-fns";

export default {
  name: "contactForm",
  type: "document",
  title: "Contact Form",
  liveEdit: false,
  initialValue: () => ({
    formSubmittedDate: new Date().toISOString(),
    status: "new",
  }),
  fields: [
    {
      name: "name",
      type: "string",
      title: "Имя / Name",
      readOnly: true,
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      initialValue: { _type: "string", value: "new" },
      options: {
        list: [
          { title: "Новые / New", value: "new" },
          { title: "В процессе / Open", value: "open" },
          { title: "Завершенные / Closed", value: "closed" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) =>
        Rule.required().error("You must select one of the three options."),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      readOnly: true,
    },
    {
      name: "phone",
      type: "string",
      title: "Телефон / Phone",
      readOnly: true,
    },
    {
      name: "message",
      type: "text",
      title: "Сообщение / Message",
      rows: 10,
      readOnly: true,
    },
    {
      name: "preferredMethod",
      type: "string",
      title: "Предпочтительный способ связи / Preferred method of contat",
      options: {
        list: [
          { title: "Email", value: "Phone" },
          { title: "Телефон / Phone", value: "Phone" },
        ],
        layout: "radio",
      },
    },
    {
      name: "location",
      type: "string",
      title: "Ссылка сайта / Location",
      description: "Page that the form was submitted from.",
      readOnly: true,
    },
    {
      name: "formSubmittedDate",
      type: "datetime",
      title: "Форма отправлена / Form Submitted",
      description: "Date and time that the form was originally submitted",
      readOnly: true,
    },
    {
      name: "project",
      type: "selectedProject",
      title: "Проект / Project",
      description:
        "Выбранные опции проекта, которые были выбраны / Selected options of the project they were viewing.",
      readOnly: true,
    },
    {
      name: "dateLastCommunicated",
      type: "date",
      title: "Дата последней коммуникации / Date Last Communicated",
      description: "Date of the most recent communication event.",
      initialValue: format(new Date(), "yyyy-MM-dd"),
    },
    {
      name: "notes",
      type: "text",
      title: "Заметки / Notes",
      rows: 10,
    },
  ],
};
