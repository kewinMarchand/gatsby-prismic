/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "../partials/navigation/Navigation"
import Footer from "../partials/footer/Footer"

import { withStyles } from '@material-ui/core'

import { Box } from '@material-ui/core'

import "../assets/css/app.css"

const styles = {
    main: {
        margin: `0 auto`,
        maxWidth: 1440,
        minHeight: '100vh',
        padding: `0 16px`
    }
};

const Layout = ({ children, classes, doc }) => {
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
        <Fragment>
            <Navigation siteMetadata={data.site.siteMetadata} doc={doc}/>
            <Box component={'main'} className={classes.main}>
                {children}
            </Box>
            <Footer author={data.site.siteMetadata.author}/>
        </Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    doc: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)
