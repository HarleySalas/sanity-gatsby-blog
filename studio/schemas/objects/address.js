export default {
  name: "address",
  type: "object",
  title: "Address",
  fields: [
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "region",
      title: "Region",
      type: "string",
    },
    {
      name: "zipcode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "mapLink",
      title: "Link to Map",
      type: "url",
    },
  ],
};
