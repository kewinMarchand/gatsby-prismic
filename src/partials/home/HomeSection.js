import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { RichText } from 'prismic-reactjs'

import { Grid, withStyles } from '@material-ui/core'

const styles = {
    section: {
        marginBottom: 40
    },
    header: {
        paddingBottom: 16
    },
    image: {
        maxWidth: 300
    }
};

const HomeSection = ({ classes, i, section }) => {
  
    return (
        <Grid container
            spacing={4}
            component={'section'} 
            key={i}
            alignItems={'center'}
            justify={'space-evenly'}
            direction={i % 2 ? 'row' : 'row-reverse'}
            wrap={'wrap'}
            className={classes.section}
        >
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6} 
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
    i: PropTypes.string.isRequired,
    section: PropTypes.node.isRequired
}

export default withStyles(styles)(HomeSection)
