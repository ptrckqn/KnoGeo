/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:300,700", "Playfair+Display:400,700"],
        },
      },
    },
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
  ],
}
