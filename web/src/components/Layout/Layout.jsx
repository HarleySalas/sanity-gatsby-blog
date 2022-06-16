import React from "react";
import Seo from "./Seo/Seo";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import Footer from "./Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import CookieConsent from "../CookieConsent/CookieConsent";
import "./layout.scss";

const Layout = ({
  children,
  location,
  title,
  description,
  contactForm,
  contactTitle,
  contactOptions,
}) => {
  return (
    <div className="layout">
      <Seo title={title} description={description} />
      <Navbar location={location} />
      <Page>{children}</Page>
      {contactForm && (
        <ContactForm
          location={location}
          title={contactTitle}
          options={contactOptions}
        />
      )}
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
