import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import LicenseList from "../../components/sections/About/Licenses/LicenseList";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";

const Licenses = ({ location }) => {
  return (
    <Layout title="Лицензии" contactForm location={location}>
      <BasicPageHero title="Лицензии" basic />
      <AboutLinks />
      <LicenseList />
      <AboutNextPrev
        next="FAQ"
        nextLink="/about/faq"
        prev="Кредит и материнский капитал"
        prevLink="/about/credit-maternity-capital"
      />
    </Layout>
  );
};

export default Licenses;
