import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { RichText } from 'prismic-reactjs'

import { Grid, withStyles } from '@material-ui/core'

const styles = {
    section: {
        marginBottom: 56
    },
    header: {
        paddingBottom: 24
    },
    image: {
        maxWidth: '100%'
    },
    imageContainer: {
        maxWidth: 600
    },
    textContainer: {
        maxWidth: 600
    }
};

const HomeSection = ({ classes, i, section }) => {
  
    return (
        <Grid container
            spacing={4}
            component={'section'}
            alignItems={'center'}
            justify={'space-evenly'}
            direction={i % 2 ? 'row' : 'row-reverse'}
            wrap={'wrap'}
            className={classes.section}
        >
        <Grid item className={classes.textContainer}>
            <Grid container 
                component={'header'}
                className={classes.header}
            >
                {RichText.render(section.title)}
            </Grid>
            <Fragment>
                {RichText.render(section.content)}
            </Fragment>
        </Grid>
        <Grid item className={classes.imageContainer}
            component={'figure'} 
            align={'center'}
        >
            <img 
                src={section.image.url} 
                alt={null !== section.image.alt ? section.image.alt : RichText.asText(section.title)}       
                width={section.image.dimensions.width}
                className={classes.image}
            />
        </Grid>
    </Grid>   
  )
}

HomeSection.propTypes = {
    i: PropTypes.number.isRequired,
    section: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeSection)
