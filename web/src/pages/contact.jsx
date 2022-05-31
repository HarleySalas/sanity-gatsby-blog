import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";

const contact = ({ location }) => {
  return (
    <Layout title="Контакты" location={location}>
      <BasicPageHero title="Контакты" basic />
    </Layout>
  );
};

export default contact;
