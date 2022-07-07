import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";

const CreditMaternityCapital = ({ location }) => {
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
          With us you can build a house on credit or using maternity capital. We
          work in Moscow and the Moscow region. You can learn more about the
          complete set of the project and clarify the terms of payment by phone
          or by leaving a request below.
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
    </Layout>
  );
};

export default CreditMaternityCapital;
