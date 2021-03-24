require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Herrerake`,
    description: `Reimagining Content Management`,
    author: `@herrerake`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://herrerake-website.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`Users`, `Case-Studies`, `Portfolios`],
        //If using single types place them in this array.
        singleTypes: [`Homepage`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        // /**
        //  * @property {boolean} [isResettingCSS=true]
        //  * if `false`, this plugin will not use `<CSSReset />
        //  */
        isResettingCSS: true,
        // /**
        //  * @property {boolean} [isUsingColorMode=true]
        //  * if `false`, this plugin will not use <ColorModeProvider />
        //  */
        isUsingColorMode: true,
        // /**
        //  * @property {number} [portalZIndex=40]
        //  * The z-index to apply to all portal nodes. This is useful
        //  * if your app uses a lot z-index to position elements.
        //  */
        portalZIndex: 40,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
