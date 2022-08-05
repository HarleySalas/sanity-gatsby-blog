export default {
  name: "seasonYearPicker",
  type: "object",
  title: "Season / Year Picker",
  fields: [
    {
      name: "season",
      title: "Season",
      type: "string",
      initialValue: "Весна",
      options: {
        list: [
          { title: "Весна / Spring", value: "Весна" },
          { title: "Лето / Summer", value: "Лето" },
          { title: "Осень / Fall", value: "Осень" },
          { title: "Зима / Winter", value: "Зима" },
        ],
      },
    },
    {
      name: "year",
      title: "Year",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    },
  ],
};
