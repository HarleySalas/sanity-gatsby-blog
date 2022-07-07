import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import TechnologiesAndMaterialsMain from "../../components/sections/About/TechnologiesAndMaterials/TechnologiesAndMaterialsMain/TechnologiesAndMaterialsMain";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";

const TechnologiesAndMaterials = ({ location, data }) => {
  return (
    <Layout title="Технологии и материалы" contactForm location={location}>
      <BasicPageHero title="Технологии и материалы" basic />
      <AboutLinks />
      <TechnologiesAndMaterialsMain data={data.sanityTechnologyAndMaterials} />
      <AboutNextPrev
        next="Кредит и материнский капитал"
        nextLink="/about/credit-maternity-capital"
        prev="Как мы работаем"
        prevLink="/about/how-we-work"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityTechnologyAndMaterials {
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

export default TechnologiesAndMaterials;
