require("dotenv").config();

const siteMetadata = {
  title: `Русский Футуризм`,
  name: `Русский Футуризм`,
  siteUrl: `https://rufuture.com`,
  description: `Русский футуризм это борьба против невежества.`,
  hero: {
    heading: `Русский футуризм — это борьба против невежества.`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://www.youtube.com/channel/UCG5xBdtlUQzZeRh4EXEvk9A`,
    },
    {
      url: `https://www.instagram.com/red_zion/`,
    },
    {
      url: `https://www.patreon.com/redzion`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      basePath: "/",
      authorsPage: true,
      mailchimp: false,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Русский Футуризм`,
      short_name: `Футуризм`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
