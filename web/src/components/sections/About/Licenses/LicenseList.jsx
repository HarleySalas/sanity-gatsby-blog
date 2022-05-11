import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./license-list.scss";

import LicenseItem from "./LicenseItem/LicenseItem";

const LicenseList = () => {
  const { licenses } = useStaticQuery(
    graphql`
      query {
        licenses: allSanityLicense {
          edges {
            node {
              type
              preview {
                asset {
                  gatsbyImageData(
                    formats: JPG
                    width: 300
                    placeholder: BLURRED
                  )
                }
              }
              file {
                asset {
                  originalFilename
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <section className="license-list">
      <div className="container license-list__container">
        {licenses.edges.map((license, index) => (
          <LicenseItem data={license.node} key={index} />
        ))}
      </div>
    </section>
  );
};

export default LicenseList;
