// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.


const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {

    const { createPage } = actions
  
    const result = await graphql(
      `
        query allArticlesQuery($id: String) {
            prismic {
                allPages(id: $id) {
                    edges {
                        node {
                            title
                            description
                            _meta {
                                type
                            }
                        }
                    }
                }
                allArticles(id: $id) {
                    edges {
                        node {
                            title
                            description
                            _meta {
                                type
                            }
                        }
                    }
                }
                allAnnexes(id: $id) {
                    edges {
                        node {
                            title
                            _meta {
                                type
                            }
                        }
                    }
                }
            }
        }
      `
    )

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    // Create pages for each node.
    const pageTemplate = path.resolve(`src/templates/page.js`)
    result.data.prismic.allPages.edges.forEach(({ node }) => {
      const path = node._meta.type
      createPage({
        path,
        component: pageTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {},
      })
    })

    const articleTemplate = path.resolve(`src/templates/article.js`)
    result.data.prismic.allArticles.edges.forEach(({ node }) => {
      const path = node._meta.type
      createPage({
        path,
        component: articleTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {},
      })
    })

    const annexeTemplate = path.resolve(`src/templates/annexe.js`)
    result.data.prismic.allAnnexes.edges.forEach(({ node }) => {
      const path = node._meta.type
      createPage({
        path,
        component: annexeTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {},
      })
    })
  }