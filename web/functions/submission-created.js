const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  apiVersion: "2021-10-21",
  token: process.env.GATSBY_SANITY_TOKEN,
  useCDN: false,
});

exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body);

  const isContactForm = payload.data.formId === "contact-form";

  if (isContactForm) {
    const contactForm = {
      _type: "contactForm",
      status: "new",
      formSubmittedDate: new Date().toISOString(),
      name: payload.data.name,
      email: payload.data.email,
      phone: payload.data.phone,
      message: payload.data.message,
      preferredMethod: payload.data.preferredMethod,
      location: payload.data.location,
      project: {
        name: payload.data.projectName ? payload.data.projectName : null,
        foundation: payload.data.projectFoundation
          ? payload.data.projectFoundation
          : null,
      },
    };

    const result = await client
      .create(contactForm)
      .catch((err) => console.log(err));
  }

  callback(null, {
    statusCode: 200,
  });
};
