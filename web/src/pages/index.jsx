import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/sections/Home/HomeHero/HomeHero";
import HomeFeaturedProject from "../components/sections/Home/HomeFeaturedProject/HomeFeaturedProject";
import HomeLatestPost from "../components/sections/Home/HomeLatestPost/HomeLatestPost";

import { mapEdgesToNodes } from "../lib/helpers";

const IndexPage = ({ location, data }) => {
  const featuredProject = data.featuredProject.featured;
  const latestPost = mapEdgesToNodes(data.latestPost)[0];

  return (
    <Layout title="Главная" location={location} contactForm>
      <HomeHero />
      <HomeFeaturedProject featuredProject={featuredProject} />
      <HomeLatestPost latestPost={latestPost} />
    </Layout>
  );
};

export const query = graphql`
  {
    featuredProject: sanityFeaturedProject {
      featured {
        _id
        name
        price
        bedrooms
        bathrooms
        interiorSize
        floors
        categories {
          title
        }
        images {
          ...ImageWithPreview
          alt
          caption
        }
        slug {
          current
        }
      }
    }
    latestPost: allSanityPost(
      limit: 1
      filter: { publishedAt: { ne: null } }
      sort: { order: DESC, fields: publishedAt }
    ) {
      edges {
        node {
          _id
          title
          publishedAt
          _rawExcerpt
          categories {
            title
          }
          mainImage {
            ...ImageWithPreview
            alt
            caption
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

export default IndexPage;
