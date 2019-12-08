module.exports = {
  siteMetadata: {
    title: `Gatsby Prismic`,
    description: `Projet React basé sur le CMS Prismic et le générateur Gatsby.`,
    author: `Kewin Marchand`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'gatsby-prismic-cms-test', // (REQUIRED, replace with your own prismic repo name)
        //accessToken: '##########', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          { 
            type: 'Page',         // TypeName from prismic
            match: '/:uid',  // Pages will be generated under this pattern
            path: '/',        // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/page.js'),
          },
          {
            type: 'Article',
            match: '/article/:id',
            path: '/article',
            component: require.resolve('./src/templates/article.js'),
          },
          {
            type: 'Annexe',
            match: '/annexe/:id',
            path: '/annexe',
            component: require.resolve('./src/templates/annexe.js'),
          },
        ],
      }
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
