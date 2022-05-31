import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import TechnologiesAndMaterialsMain from "../../components/sections/About/TechnologiesAndMaterials/TechnologiesAndMaterialsMain/TechnologiesAndMaterialsMain";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const TechnologiesAndMaterials = () => {
  return (
    <Layout title="Технологии и материалы" contactForm>
      <BasicPageHero title="Технологии и материалы" basic />
      <AboutLinks />
      <TechnologiesAndMaterialsMain />
    </Layout>
  );
};

export default TechnologiesAndMaterials;
