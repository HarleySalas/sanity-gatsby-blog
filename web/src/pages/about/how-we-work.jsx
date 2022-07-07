import React from "react";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import HowWeWorkGuarantees from "../../components/sections/About/HowWeWork/HowWeWorkGuarantees/HowWeWorkGuarantees";
import HowWeWorkSteps from "../../components/sections/About/HowWeWork/HowWeWorkSteps/HowWeWorkSteps";
import HowWeWorkCustom from "../../components/sections/About/HowWeWork/HowWeWorkCustom/HowWeWorkCustom";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";

const HowWeWork = ({ data, location }) => {
  const { guarantees, steps, _rawMessage } = data.howWeWork;

  return (
    <Layout title="Как мы работаем" contactForm location={location}>
      <BasicPageHero title="Как мы работаем" basic />
      <AboutLinks />
      <HowWeWorkGuarantees guarantees={guarantees} />
      <HowWeWorkSteps steps={steps} />
      <HowWeWorkCustom text={_rawMessage} />
      <AboutNextPrev
        next="Технологии и материалы"
        nextLink="/about/technologies-and-materials"
        prev="О нас"
        prevLink="/about/company"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    howWeWork: sanityHowWeWork {
      _rawMessage
      guarantees {
        _key
        _rawText
        title
      }
      steps {
        _key
        _rawText
        title
      }
    }
  }
`;

export default HowWeWork;
