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
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `herrerake.com`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/herrerake-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:
          process.env.NODE_ENV === "production"
          //DEPLOY_URL variable is in gatsbyjs.com/dashboard
            ? process.env.DEPLOY_URL
            : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        collectionTypes: [`Users`, `Case-Studies`, `Portfolios`, `Blogs`],
        //If using single types place them in this array.
        singleTypes: [`Homepage`, `Blogpage`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    `gatsby-plugin-fontawesome-css`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}