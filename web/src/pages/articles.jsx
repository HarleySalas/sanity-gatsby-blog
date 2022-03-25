import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";

const articles = () => {
  return (
    <Layout title="Статьи">
      <BasicPageHero title="Статьи" />
    </Layout>
  );
};

export default articles;
