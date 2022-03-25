import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import FaqAccordion from "../../components/sections/About/Faq/FaqAccordion/FaqAccordion";

const faq = () => {
  return (
    <Layout title="FAQ">
      <BasicPageHero title="FAQ" basic />
      <FaqAccordion />
    </Layout>
  );
};

export default faq;
