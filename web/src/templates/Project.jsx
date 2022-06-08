import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/GraphQLErrorList/GraphQLErrorList";

import Layout from "../components/Layout/Layout";
import ProjectTemplate from "../components/sections/templates/Project";

const Project = ({ data, errors, location }) => {
  const project = data && data.project;
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
          }}
        >
          <ProjectTemplate project={project} />
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
  }
`;

export default Project;
