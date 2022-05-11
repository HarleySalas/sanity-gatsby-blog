import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import LicenseList from "../../components/sections/About/Licenses/LicenseList";

const Licenses = () => {
  return (
    <Layout title="Лицензии">
      <BasicPageHero title="Лицензии" basic />
      <LicenseList />
    </Layout>
  );
};

export default Licenses;
