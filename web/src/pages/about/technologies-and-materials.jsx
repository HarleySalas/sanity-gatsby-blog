import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import TechnologiesAndMaterialsMain from "../../components/sections/About/TechnologiesAndMaterials/TechnologiesAndMaterialsMain/TechnologiesAndMaterialsMain";

const TechnologiesAndMaterials = () => {
  return (
    <Layout title="Технологии и материалы">
      <BasicPageHero title="Технологии и материалы" basic />
      <TechnologiesAndMaterialsMain />
    </Layout>
  );
};

export default TechnologiesAndMaterials;
