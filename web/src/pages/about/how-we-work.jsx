import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import HowWeWorkSteps from "../../components/sections/About/HowWeWork/HowWeWorkSteps/HowWeWorkSteps";
import HowWeWorkCustom from "../../components/sections/About/HowWeWork/HowWeWorkCustom/HowWeWorkCustom";

const HowWeWork = () => {
  return (
    <Layout title="Как мы работаем">
      <BasicPageHero title="Как мы работаем" />
      <HowWeWorkSteps />
      <HowWeWorkCustom />
    </Layout>
  );
};

export default HowWeWork;
