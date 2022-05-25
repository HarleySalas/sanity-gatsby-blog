import React from "react";
import { graphql, Link } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { GatsbyImage } from "gatsby-plugin-image";

const List = ({ data }) => {
  //mapEdgesToNodes simply makes
  const projects = data && data.projects ? mapEdgesToNodes(data.projects) : [];

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.slug.current}`}>
              <div>{project.name}</div>
              <GatsbyImage
                image={project.images[0].asset.gatsbyImageData}
                alt={"house"}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query ListQuery {
    projects: allSanityProject {
      edges {
        node {
          id
          name
          images {
            asset {
              gatsbyImageData(width: 400)
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

export default List;
