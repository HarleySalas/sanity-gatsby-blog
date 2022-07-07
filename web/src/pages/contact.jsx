import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import ContactDetails from "../components/sections/Contact/ContactDetails/ContactDetails";
import ContactMap from "../components/sections/Contact/ContactMap/ContactMap";

const contact = ({ location, data }) => {
  return (
    <Layout
      title="Контакты"
      location={location}
      contactForm
      contactTitle={{
        prefix: "Получите бесплатную консультацию",
        title: "Мы поможем вам с любыми возникшими вопросами!",
      }}
    >
      <BasicPageHero title="Контакты" basic />
      <ContactDetails data={data.sanityCompanyDetails} />
      <ContactMap />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityCompanyDetails {
      companyEmail
      companyPhone
      workHours
      businessAddress {
        streetAddress
        city
        region
        zipcode
        mapLink
      }
    }
  }
`;

export default contact;
