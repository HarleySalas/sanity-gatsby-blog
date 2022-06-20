const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  apiVersion: "2021-10-21",
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false,
});

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const isContactForm = data.formId === "contact-form";

  if (isContactForm) {
    const contactForm = {
      _type: "contactForm",
      status: "new",
      formSubmittedDate: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      preferredMethod: data.preferredMethod,
      location: data.location,
      project: {
        name: data.projectName ? data.projectName : "",
        finish: data.projectFinish ? data.projectFinish : "",
        foundation: data.projectFoundation ? data.projectFoundation : "",
      },
    };

    const result = await client.create(contactForm).catch((err) => {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: err }),
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Thank you for contacting us.",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Thank you for your submission.",
    }),
  };
};
