import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const CreditMaternityCapital = () => {
  return (
    <Layout title="Кредит и материнский капитал" contactForm>
      <BasicPageHero title="Кредит и материнский капитал" basic />
      <AboutLinks />
    </Layout>
  );
};

export default CreditMaternityCapital;
