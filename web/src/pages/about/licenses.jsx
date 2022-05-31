import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import LicenseList from "../../components/sections/About/Licenses/LicenseList";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const Licenses = () => {
  return (
    <Layout title="Лицензии" contactForm>
      <BasicPageHero title="Лицензии" basic />
      <AboutLinks />
      <LicenseList />
    </Layout>
  );
};

export default Licenses;
