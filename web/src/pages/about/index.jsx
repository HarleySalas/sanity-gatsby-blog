import React from "react";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const { AboutImage } = useStaticQuery(
    graphql`
      query {
        AboutImage: file(
          relativePath: { eq: "images/page-hero-images/about-hero.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  return (
    <Layout title="О компании">
      <BasicPageHero
        title="О компании"
        // placeholderImage={AboutImage}
        // imageTop
        basic
      />
      about us
    </Layout>
  );
};

export default About;
