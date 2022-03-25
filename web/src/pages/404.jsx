import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import { graphql, useStaticQuery } from "gatsby";

const NotFoundPage = () => {
  const { NotFoundImage } = useStaticQuery(
    graphql`
      query {
        NotFoundImage: file(
          relativePath: { eq: "images/page-hero-images/404-hero.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  return (
    <Layout title="404: Not found">
      <BasicPageHero title="404: Not Found" placeholderImage={NotFoundImage} />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

// import Layout from "../components/layout";
// import React from "react";
// import SEO from "../components/seo";

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// );

// export default NotFoundPage;
