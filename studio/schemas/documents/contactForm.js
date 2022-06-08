import { format } from "date-fns";

export default {
  name: "contactForm",
  type: "document",
  title: "Contact Form",
  liveEdit: false,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      readOnly: true,
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      initialValue: "New",
      options: {
        list: ["New", "Open", "Closed"],
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
      title: "Phone",
      readOnly: true,
    },
    {
      name: "message",
      type: "text",
      title: "Message",
      rows: 10,
      readOnly: true,
    },
    {
      name: "preferredMethod",
      type: "string",
      title: "Preferred method of contat",
      options: {
        list: ["Email", "Phone"],
        layout: "radio",
      },
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      description: "Page that the form was submitted from.",
      readOnly: true,
    },
    {
      name: "formSubmittedDate",
      type: "datetime",
      title: "Form Submitted",
      description: "Date and time that the form was originally submitted",
      initialValue: new Date().toISOString(),
      readOnly: true,
    },
    {
      name: "project",
      type: "selectedProject",
      title: "Project",
      description: "Selected options of the project they were viewing.",
      readOnly: true,
    },
    {
      name: "dateLastCommunicated",
      type: "date",
      title: "Date Last Communicated",
      description: "Date of the most recent communication event.",
      initialValue: format(new Date(), "yyyy-MM-dd"),
    },
    {
      name: "notes",
      type: "text",
      title: "Notes",
      rows: 10,
    },
  ],
};
