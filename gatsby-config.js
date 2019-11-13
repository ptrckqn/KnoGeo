/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "KnoGeo",
    description: "KnoGeo",
    keywords: "KnoGeo",
    siteUrl: `https://www.KnoGeo.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.KnoGeo.com",
        sitemap: "https://www.KnoGeo.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sitemap",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        maxWidth: 2560,
        quality: 90,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "KnoGeo",
        short_name: "KnoGeo",
        icon: "static/images/icon.png",
        start_url: "/",
        background_color: "#0D0A0B",
        theme_color: "#0074b8",
        display: "standalone",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
