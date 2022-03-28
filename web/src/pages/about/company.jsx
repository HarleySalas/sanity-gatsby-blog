import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import CompanyText from "../../components/sections/About/Company/CompanyText/CompanyText";

const company = () => {
  return (
    <Layout title="О нас">
      <BasicPageHero title="О нас" />
      <CompanyText />
    </Layout>
  );
};

export default company;
