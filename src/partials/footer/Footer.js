import React from "react"
import PropTypes from "prop-types"

import ExternalLink from '../../components/ExternalLink'
import { AppBar, Grid, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = {
    footer: {
        padding: 24
    }
};

const Footer = ({classes, author}) => {
    return (
        <AppBar
            position={'static'}
            component={'footer'} 
            className={classes.footer}
        >
            <Toolbar>
                <Grid container direction={'column'} alignItems={'center'}>
                    <Typography variant="body1" gutterBottom>
                        {new Date().getFullYear()}&nbsp;Par&nbsp;{author}
                    </Typography>
                    <Typography variant="body1">
                        Pour&nbsp;
                        <ExternalLink 
                            to={'https://prismic.io/'} 
                            label={'Prismic'}
                        />
                    </Typography>
                    <Typography variant="body1">
                        Avec&nbsp;
                        <ExternalLink 
                            to={'https://www.gatsbyjs.org'} 
                            label={'Gatsby'}
                        />
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)