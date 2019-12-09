module.exports = {
    siteMetadata: {
        title: `Gatsby Prismic`,
        description: `Projet React basé sur le CMS Prismic et le générateur Gatsby.`,
        author: `Kewin Marchand`,
        siteUrl: `https://friendly-minsky-12bb22.netlify.com/`,
    },
    plugins: [
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-robots-txt',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://friendly-minsky-12bb22.netlify.com/`,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                sitemapSize: 5000
            }
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/images/gatsby-icon.png",
                appName: null, // Inferred with your package.json
                appDescription: null,
                developerName: null,
                developerURL: null,
                dir: 'auto',
                lang: 'fr-FR',
                background: '#663399',
                theme_color: '#663399',
                display: 'standalone',
                orientation: 'any',
                start_url: '/?homescreen=1',
                version: '1.0',
            
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    yandex: false,
                    windows: false
              }
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto`,
                    `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        { 
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                disableAutoprefixing: false,
                disableMinification: false,
            },
        },
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
                //accessToken: '##########', // (optional API access token)
                repositoryName: 'gatsby-prismic-cms-test', // (REQUIRED, replace with your own prismic repo name)
                path: '/preview', // (optional preview path. Default: /preview)
                previews: true, // (optional, activated Previews. Default: false)
                pages: [
                { 
                    type: 'Page', // TypeName from prismic
                    match: '/:uid', // Pages will be generated under this pattern
                    path: '/', // Placeholder page for unpublished documents
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
                name: `gatsby-prismic`,
                short_name: `gatsby-prismic`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        }
    ],
}
