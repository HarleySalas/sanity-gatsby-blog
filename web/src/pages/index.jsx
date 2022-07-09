import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/sections/Home/HomeHero/HomeHero";
import HomeHow from "../components/sections/Home/HomeHow/HomeHow";
import HomeFeaturedProject from "../components/sections/Home/HomeFeaturedProject/HomeFeaturedProject";
import HomeLatestPost from "../components/sections/Home/HomeLatestPost/HomeLatestPost";
import Sale from "../components/Sale/Sale";
import { mapEdgesToNodes } from "../lib/helpers";

const IndexPage = ({ location, data }) => {
  const featuredProject = data.featuredProject.featured;
  const latestPost = mapEdgesToNodes(data.latestPost)[0];
  const saleData = mapEdgesToNodes(data.allSanitySale)[0];

  return (
    <Layout title="Главная" location={location} contactForm>
      <HomeHero />
      <HomeHow />
      <HomeFeaturedProject featuredProject={featuredProject} />
      <HomeLatestPost latestPost={latestPost} />
      <Sale data={saleData} />
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

export default IndexPage;
