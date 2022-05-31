import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import ProjectsMain from "../components/sections/Projects/ProjectsMain/ProjectsMain";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

const projects = ({ location, data }) => {
  return (
    <Layout title="Проекты" location={location}>
      <BasicPageHero title="Проекты" basic />
      <ProjectsMain
        projects={data && data.projects ? mapEdgesToNodes(data.projects) : []}
      />
    </Layout>
  );
};

export default projects;

export const query = graphql`
  query {
    projects: allSanityProject {
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
  }
`;
