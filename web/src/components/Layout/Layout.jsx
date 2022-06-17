import React from "react";
import Seo from "./Seo/Seo";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import Footer from "./Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import CookieConsent from "../CookieConsent/CookieConsent";
import { useHasMounted } from "../../hooks";
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
  const hasMounted = useHasMounted();
  return (
    <div className="layout">
      <div className="layout__scrollbar-placeholder"></div>
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
      {hasMounted ? <CookieConsent location={location} /> : null}
    </div>
  );
};

export default Layout;
