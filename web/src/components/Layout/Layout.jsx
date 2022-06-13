import React from "react";
import Seo from "./Seo/Seo";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import Footer from "./Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

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
    </div>
  );
};

export default Layout;
