import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import ArticleHero from "../components/sections/Article/ArticleHero/ArticleHero";
import ArticleBody from "../components/sections/Article/ArticleBody/ArticleBody";

const Article = ({ data }) => {
  const posts = data && data.post ? mapEdgesToNodes(data.post) : [];
  const post = posts[0];

  return (
    <Layout title={`${post.title}`}>
      <ArticleHero mainImage={post.mainImage} title={post.title} />
      <ArticleBody
        image={post.mainImage}
        title={post.title}
        category={post.categories[0].title}
        publishedAt={post.publishedAt}
        body={post._rawBody}
      />
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    post: allSanityPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          _id
          mainImage {
            ...ImageWithPreview
            caption
            alt
          }
          slug {
            current
          }
          title
          publishedAt
          categories {
            title
          }
          _rawExcerpt
          _rawBody
          authors {
            author {
              name
            }
          }
        }
        previous {
          slug {
            current
          }
          mainImage {
            ...ImageWithPreview
            alt
            caption
          }
          categories {
            title
          }
          _rawExcerpt
        }
        next {
          slug {
            current
          }
          mainImage {
            ...ImageWithPreview
            alt
            caption
          }
          categories {
            title
          }
          _rawExcerpt
        }
      }
    }
  }
`;
