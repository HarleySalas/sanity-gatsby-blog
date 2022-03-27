export default {
  name: "companyInfo",
  title: "Company Info",
  type: "document",
  liveEdit: false,
  //Below removes the option to "create" or "delete", for singleton instances like this.
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "companyName",
      title: "Official Company Name",
      type: "string",
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
