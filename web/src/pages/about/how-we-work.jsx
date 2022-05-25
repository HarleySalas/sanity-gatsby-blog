import React from "react";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import HowWeWorkSteps from "../../components/sections/About/HowWeWork/HowWeWorkSteps/HowWeWorkSteps";
import HowWeWorkCustom from "../../components/sections/About/HowWeWork/HowWeWorkCustom/HowWeWorkCustom";

const HowWeWork = ({ data }) => {
  const { steps, _rawMessage } = data.howWeWork;

  return (
    <Layout title="Как мы работаем">
      <BasicPageHero title="Как мы работаем" basic />
      <HowWeWorkSteps steps={steps} />
      <HowWeWorkCustom text={_rawMessage} />
    </Layout>
  );
};

export const query = graphql`
  {
    howWeWork: sanityHowWeWork {
      _rawMessage
      steps {
        _key
        _rawText
        title
      }
    }
  }
`;

export default HowWeWork;
