import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Button, Grid, Typography, withStyles } from '@material-ui/core'

import Layout from "../components/layout"

const styles = {
    title: {
        fontSize: '2rem'
    },
    footer: {
        padding: 40
    }
};

const NotFoundPage = ({classes}) => {
    const doc = {
        node: {
            title: [
                {
                spans: [],
                text: "404",
                type: "heading1"
                }
            ],
            bg_image: {
                url: ''
            }
        }
    }

    return (
        <Layout doc={doc}>
            <Grid container 
                direction={'column'}
                alignItems={'center'}
            >
                <Typography variant="h1" className={classes.title}>
                    404 - Nous ne trouvons pas ce que vous cherchez
                </Typography>
                <Grid container 
                    justify={'center'}
                    alignItems={'center'}
                    className={classes.footer}
                >
                    <Link to="/">
                        <Button variant={'text'}>
                            Retourner à l'accueil
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    )
}

NotFoundPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFoundPage)

