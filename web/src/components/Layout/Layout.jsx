import React, { useRef, useEffect } from "react";
import Seo from "./Seo/Seo";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Seo title={title} />
      <Navbar />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
