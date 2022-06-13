import React from "react";
import Layout from "../components/Layout/Layout";
import BasicPageHero from "../components/BasicPageHero/BasicPageHero";
import NotFound from "../components/sections/NotFoundPage/NotFound";

const NotFoundPage = ({ location }) => {
  return (
    <Layout title="404: Страница не найдена" location={location} contactForm>
      <BasicPageHero title="Упс..." basic />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
