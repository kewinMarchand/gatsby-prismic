/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "./header"
import Banner from "./Banner"
import { RichText } from 'prismic-reactjs'
import "./layout.css"

const Layout = ({ children, doc }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={RichText.asText(doc.node.title)} />
      <main>
        <Header siteTitle={data.site.siteMetadata.title} />
        {null !== doc && undefined !== doc && <Banner doc={doc}/>}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1440,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer>
          <p style={{textAlign: 'center'}}>
            {new Date().getFullYear()}&nbsp;Kewin Marchand, Fait avec&nbsp;
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  doc: PropTypes.object
}

export default Layout
