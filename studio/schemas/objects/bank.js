export default {
  name: "bank",
  type: "object",
  title: "Банк / Bank",
  fields: [
    {
      name: "name",
      title: "Назвоние банка / Name of Bank",
      type: "string",
    },
    {
      name: "correspondingAccount",
      title: "к/с / Correspondent Account",
      type: "string",
    },
    {
      name: "identificationCode",
      title: "БИК / Identification Code",
      type: "string",
    },
  ],
};
