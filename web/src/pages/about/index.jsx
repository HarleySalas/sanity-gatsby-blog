import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";

// import AboutContent from "../../components/sections/About/Index/AboutContent/AboutContent";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
const About = ({ location }) => {
  return (
    <Layout title="О компании" location={location} contactForm>
      <BasicPageHero title="О компании" basic />
      <AboutLinks />
      {/* <AboutContent /> */}
    </Layout>
  );
};

export default About;
