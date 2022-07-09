import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";
import Sale from "../../components/Sale/Sale";
import { mapEdgesToNodes } from "../../lib/helpers";

const CreditMaternityCapital = ({ location, data }) => {
  const saleData = mapEdgesToNodes(data.allSanitySale)[0];

  return (
    <Layout
      title="Кредит и материнский капитал"
      contactForm
      location={location}
    >
      <BasicPageHero title="Кредит и материнский капитал" basic />
      <AboutLinks />
      <div className="container">
        <br />
        <br />
        <br />
        <p>
          У нас вы можете построить дом в кредит или используя материнский
          капитал. Мы работаем в Москве и Московской области. Узнать подробнее о
          комплектации проекта и уточнить условия оплаты вы можете по телефону
          или оставив заявку ниже.
        </p>
        <br />
        <br />
        <br />
      </div>
      <AboutNextPrev
        next="Лицензии"
        nextLink="/about/licenses"
        prev="Технологии и материалы"
        prevLink="/about/technologies-and-materials"
      />
      <Sale data={saleData} />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanitySale(limit: 1, sort: { fields: enddate, order: ASC }) {
      edges {
        node {
          id
          text
          enddate
        }
      }
    }
  }
`;

export default CreditMaternityCapital;
