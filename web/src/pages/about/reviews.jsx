import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";

const Reviews = ({ location }) => {
  return (
    <Layout title="Отзывы" contactForm location={location}>
      <BasicPageHero title="Отзывы" basic />
      <AboutLinks />
    </Layout>
  );
};

export default Reviews;
