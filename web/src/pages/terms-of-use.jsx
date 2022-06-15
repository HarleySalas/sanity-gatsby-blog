import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import PortableTextDocument from "../components/PortableTextDocument/PortableTextDocument";

const termsOfUse = ({ location, data }) => {
  return (
    <Layout title="Пользовательское соглашение" location={location} contactForm>
      <BasicPageHero title="Пользовательское соглашение" basic />
      <PortableTextDocument data={data.sanityCompanyDetails._rawTermsOfUse} />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityCompanyDetails {
      _rawTermsOfUse
    }
  }
`;

export default termsOfUse;
