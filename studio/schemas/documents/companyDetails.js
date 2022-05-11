export default {
  name: "companyDetails",
  type: "document",
  title: "Company Details",
  liveEdit: false,
  __experimental_actions: ["update", /* "create", /* 'delete', */ "publish"],
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Official Company Name",
    },
    {
      name: "workHours",
      title: "Work Hours",
      type: "string",
    },
    {
      name: "companyPhone",
      title: "Company Phone",
      type: "string",
    },
    {
      name: "businessAddress",
      title: "Business Address",
      type: "address",
    },
    {
      name: "companyEmail",
      title: "Primary Company Contact Email",
      type: "string",
    },
  ],
};
