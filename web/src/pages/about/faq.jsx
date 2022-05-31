import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import FaqAccordion from "../../components/sections/About/Faq/FaqAccordion/FaqAccordion";
import { graphql } from "gatsby";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const faq = ({ data }) => {
  return (
    <Layout title="FAQ" contactForm>
      <BasicPageHero title="FAQ" basic />
      <AboutLinks />
      <FaqAccordion faq={data.faq.questions} />
    </Layout>
  );
};

export const query = graphql`
  {
    faq: sanityFaq {
      questions {
        q
        _key
        _rawA
      }
    }
  }
`;

export default faq;
