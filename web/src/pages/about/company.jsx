import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import BasicPageHero from "../../components/BasicPageHero/BasicPageHero";
// import CompanyText from "../../components/sections/About/Company/CompanyText/CompanyText";
import CompanyAbout from "../../components/sections/About/Company/CompanyAbout/CompanyAbout";
import CompanyRequisites from "../../components/sections/About/Company/CompanyRequisites/CompanyRequisites";
import AboutLinks from "../../components/sections/About/Index/AboutLinks/AboutLinks";
import AboutNextPrev from "../../components/sections/About/Index/AboutNextPrev/AboutNextPrev";

const company = ({ data, location }) => {
  const companyData = data.sanityAboutUs;
  const imgData = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout title="О нас" contactForm location={location}>
      <BasicPageHero title="О нас" basic />
      <AboutLinks />
      <CompanyAbout data={companyData} imgData={imgData} />
      {/* <CompanyText data={companyData} imgData={imgData} /> */}
      <CompanyRequisites data={data.sanityCompanyDetails.companyRequisites} />
      <AboutNextPrev next="Как мы работаем" nextLink="/about/how-we-work" />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityAboutUs {
      id
      _rawBody
    }
    file(relativePath: { eq: "images/about-house.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          width: 620
          placeholder: BLURRED
          layout: FULL_WIDTH
        )
      }
    }
    sanityCompanyDetails {
      companyRequisites {
        generalDirector
        headAccountant
        taxNumber
        registrationCode
        registeredAddress {
          streetAddress
          city
          region
          zipcode
        }
        physicalAddress {
          streetAddress
          city
          region
          zipcode
        }
        companyPhone
        bankAccountNumber
        bank {
          name
          correspondingAccount
          identificationCode
        }
        activityClassification
        businessClassification
        territoryNumber
        stateRegistrationNumber
        contactEmails
      }
    }
  }
`;

export default company;
