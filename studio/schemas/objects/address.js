export default {
  name: "address",
  type: "object",
  title: "Адрес / Address",
  fields: [
    {
      name: "streetAddress",
      title: "Улица / Street Address",
      type: "string",
    },
    {
      name: "city",
      title: "Город / City",
      type: "string",
    },
    {
      name: "region",
      title: "Регион / Region",
      type: "string",
    },
    {
      name: "zipcode",
      title: "Индекс / Postal Code",
      type: "string",
    },
    {
      name: "mapLink",
      title: "Ссылка на карту / Link to Map",
      type: "url",
    },
  ],
};
