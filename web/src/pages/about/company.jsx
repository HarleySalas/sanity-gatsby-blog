import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import CompanyText from "../../components/sections/About/Company/CompanyText/CompanyText";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const company = () => {
  return (
    <Layout title="О нас" contactForm>
      <BasicPageHero title="О нас" basic />
      <AboutLinks />
      <CompanyText />
    </Layout>
  );
};

export default company;
