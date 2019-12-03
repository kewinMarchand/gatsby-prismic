import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Banner from "../banner/Banner"
import SEO from "../../components/SEO"

import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
    header: {
        marginBottom: 40
    },
    menuButton: {
        marginRight: 16
    },
    title: {
        color: `white`,
        flexGrow: 1,
        textDecoration: `none`
    }
};

const Navigation = ({ classes, doc, siteMetadata }) => {
    const {title, bg_image} = doc.node
    return (
        <Fragment>
            <SEO title={title} siteMetadata={siteMetadata}/>
            <AppBar position="static" className={classes.header}>
                <Toolbar component={'nav'}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" className={classes.title}>
                        <Typography variant="h6">
                            {siteMetadata.title}
                        </Typography>
                    </Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <Banner title={title} bg_image={bg_image}/>
            </AppBar>
        </Fragment>
    )
}

Navigation.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  doc: PropTypes.object
}

export default withStyles(styles)(Navigation)
