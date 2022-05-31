import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const Reviews = () => {
  return (
    <Layout title="Отзывы" contactForm>
      <BasicPageHero title="Отзывы" basic />
      <AboutLinks />
    </Layout>
  );
};

export default Reviews;
