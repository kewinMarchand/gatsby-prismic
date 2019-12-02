/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../../components/SEO"
import Navigation from "../navigation/Navigation"
import Banner from "../banner/Banner"

const Header = ({ siteMetadata, doc }) => {
  const {title, bg_image} = doc.node
  return (
    <>
      <SEO title={title} siteMetadata={siteMetadata}/>
      <Navigation siteMetadata={siteMetadata}/>
      <Banner title={title} bg_image={bg_image}/>
    </>
  )
}

Header.propTypes = {
  siteMetadata: PropTypes.object,
  doc: PropTypes.object
}

export default Header
