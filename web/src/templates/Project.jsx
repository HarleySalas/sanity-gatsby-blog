import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/GraphQLErrorList/GraphQLErrorList";

import Layout from "../components/Layout/Layout";
import ProjectTemplate from "../components/sections/templates/Project";
import projectFinishesDefault from "../components/sections/templates/Project/ProjectOptions/ProjectFinishingOptions/projectFinishesDefault";
import Sale from "../components/Sale/Sale";
import { mapEdgesToNodes } from "../lib/helpers";

const Project = ({ data, errors, location }) => {
  const project = data && data.project;
  const saleData = mapEdgesToNodes(data.allSanitySale)[0];

  return (
    <>
      {errors && (
        <Layout title="GraphQL Error">
          <GraphQLErrorList errors={errors} />
        </Layout>
      )}
      {project && (
        <Layout
          title={project.name}
          location={location}
          contactForm
          contactTitle={{
            // prefix: "Спросите об этом проекте",
            title: "Спросите об этом проекте",
          }}
          contactOptions={{
            foundations: project.foundations,
            finishes:
              project.finishingOptions.length > 0
                ? project.finishingOptions
                : projectFinishesDefault,
          }}
        >
          <ProjectTemplate project={project} />
          <Sale data={saleData} />
        </Layout>
      )}
    </>
  );
};

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      name
      price
      images {
        caption
        alt
        asset {
          id
          gatsbyImageData(formats: AUTO, placeholder: BLURRED)
        }
      }
      floors
      bedrooms
      bathrooms
      categories {
        id
        title
      }
      finishingOptions {
        _key
        _rawDescription
        type
        cost
        features {
          _key
          title
          _rawDescription
        }
      }
      foundations {
        type {
          name
          _rawDescription
          image {
            asset {
              gatsbyImageData(width: 300)
            }
          }
          description {
            list
            style
            children {
              marks
              text
            }
          }
        }
        cost
      }
      excerpt {
        children {
          text
        }
      }
      interiorSize
      isActive
      totalArea
      totalSize
      buildingArea
      constructionArea
      blueprintsDisplay {
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        svg {
          source
        }
      }
      originalBlueprint {
        asset {
          url
          originalFilename
          id
        }
      }
      _rawDescription
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

export default Project;
