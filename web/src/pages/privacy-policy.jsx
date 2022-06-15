import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import PortableTextDocument from "../components/PortableTextDocument/PortableTextDocument";

const privacyPolicy = ({ location, data }) => {
  console.log(data);
  return (
    <Layout title="Политика конфиденциальности" location={location} contactForm>
      <BasicPageHero title="Политика конфиденциальности" basic />
      <PortableTextDocument
        data={data.sanityCompanyDetails._rawPrivacyPolicy}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityCompanyDetails {
      _rawPrivacyPolicy
    }
  }
`;

export default privacyPolicy;
