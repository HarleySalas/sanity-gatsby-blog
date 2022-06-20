import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import staticSitemapData from "../../content/sitemap-data.json";

import SitemapContainer from "../components/sections/Sitemap/SitemapContainer/SitemapContainer";
import SitemapCategory from "../components/sections/Sitemap/SitemapCategory/SitemapCategory";

import { mapEdgesToNodes } from "../lib/helpers";
const sitemap = ({ location, data }) => {
  const projectNodes = mapEdgesToNodes(data.projectLinks);
  const postNodes = mapEdgesToNodes(data.postLinks);

  const fixDynamicNodes = (nodes, prefix, name) => {
    return nodes.map((node) => ({
      _id: node._id,
      title: node[name],
      link: `/${prefix}/${node.slug.current}`,
    }));
  };

  const projectData = fixDynamicNodes(projectNodes, "projects", "name");
  const postData = fixDynamicNodes(postNodes, "article", "title");

  console.log(projectData);

  return (
    <Layout title="Sitemap" location={location} contactForm>
      <BasicPageHero title="Sitemap" basic />
      <SitemapContainer>
        <SitemapCategory title="Основные" data={staticSitemapData.mainLinks} />
        <SitemapCategory
          title="О КОМПАНИИ"
          data={staticSitemapData.aboutLinks}
        />
        <SitemapCategory title="ПРОЕКТЫ" data={projectData} />
        <SitemapCategory title="СТАТЬИ" data={postData} />
      </SitemapContainer>
    </Layout>
  );
};

export const query = graphql`
  query SitemapQuery {
    projectLinks: allSanityProject(
      filter: { isActive: { eq: true } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          _id
          name
          slug {
            current
          }
        }
      }
    }
    postLinks: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
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
  }
`;

export default sitemap;
