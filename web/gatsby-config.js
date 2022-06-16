require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { max } = require("date-fns");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `MRS House`,
    description: `Строим современные теплые каркасные дома по финским и канадским технологиям. Москва и МО. Кредит, рассрочка, материнский капитал. Звоните!`,
    author: `@harleysalas`,
    siteUrl: `https://m-r-s.ru/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-portal`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        yandexMetrika: {
          trackingId: process.env.YANDEX_METRIKA_TRACKING_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://m-r-s.ru/`,
        sitemap: `https://m-r-s.ru/sitemap/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        ...clientConfig.sanity,
        defaultImageConfig: {
          quality: 80,
          fit: max,
          auto: "format",
        },
        customImageTypes: ["SanityMainImage"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MRS House`,
        short_name: `MRS`,
        start_url: isProd ? `https://m-r-s.ru` : "http://localhost:8000",
        background_color: `#f2f2f2`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#343436`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
