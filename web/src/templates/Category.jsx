import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import ArticlesCategories from "../components/sections/Articles/ArticlesCategories/ArticlesCategories";
import ArticlesList from "../components/sections/Articles/ArticlesList/ArticlesList";

const Category = ({ data }) => {
  const posts = data && data.posts ? mapEdgesToNodes(data.posts) : [];
  const categories =
    data && data.categories ? mapEdgesToNodes(data.categories) : [];

  return (
    <Layout title="Статьи">
      <BasicPageHero title="Статьи" basic />
      <ArticlesCategories categories={categories} />
      <ArticlesList posts={posts} />
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    categories: allSanityCategory(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(
      filter: {
        categories: { elemMatch: { id: { eq: $id } } }
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
      }
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          _id
          title
          publishedAt
          slug {
            current
          }
          categories {
            title
          }
          mainImage {
            ...ImageWithPreview
            caption
            alt
            asset {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED, width: 800)
            }
          }
          _rawExcerpt
        }
      }
    }
  }
`;
