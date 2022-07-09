import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import ProjectsMain from "../components/sections/Projects/ProjectsMain/ProjectsMain";
import Sale from "../components/Sale/Sale";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

const projects = ({ location, data }) => {
  const saleData = mapEdgesToNodes(data.allSanitySale)[0];
  return (
    <Layout
      title="Проекты"
      location={location}
      contactForm
      contactTitle={{
        prefix: "Не нашли, что искали?",
        title:
          "Мы также вносим изменения в существующие проекты и разрабатываем индивидуальные!",
      }}
    >
      <BasicPageHero title="Проекты" basic />
      <ProjectsMain
        projects={data && data.projects ? mapEdgesToNodes(data.projects) : []}
      />
      <Sale data={saleData} />
    </Layout>
  );
};

export default projects;

export const query = graphql`
  query {
    projects: allSanityProject(
      filter: { isActive: { eq: true } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id
          name
          price
          images {
            asset {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED, width: 800)
            }
          }
          floors
          bedrooms
          bathrooms
          categories {
            title
          }
          interiorSize
          isActive
          slug {
            current
          }
        }
      }
    }
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
