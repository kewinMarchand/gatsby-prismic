/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../partials/header/Header"
import Footer from "../partials/footer/Footer"

import "../assets/css/app.css"

const Layout = ({ children, doc }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          minHeight: '100vh',
          padding: 0
        }}
      >
        <Header doc={doc} siteMetadata={data.site.siteMetadata}/>
        {children}
      </main>
      <Footer author={data.site.siteMetadata.author}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  doc: PropTypes.object.isRequired
}

export default Layout
