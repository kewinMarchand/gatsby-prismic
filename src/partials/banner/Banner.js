import React from "react"
import PropTypes from "prop-types"
import { RichText } from 'prismic-reactjs'

import { Grid, withStyles } from '@material-ui/core'

const styles = {
    banner: {
        height: '30vmax', 
        width: '100%',
        backgroundSize: 'cover'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0,0 , .15)',
        color: '#FFF',
        height: '100%'
    }
};

const Banner = ({ classes, title, bg_image }) => {

    return (
        <Grid container 
            component={'figure'} 
            className={classes.banner}
            style={{background: 'url(' + bg_image.url +') 100%',}}
        >
            <Grid container 
                alignItems={'center'} 
                justify={'center'}
                className={classes.overlay}
            >
                {RichText.render(title)}
            </Grid>    
        </Grid>
    )
}
  
Banner.propTypes = {
    title: PropTypes.string.isRequired,
    bg_image: PropTypes.string.isRequired
}


export default withStyles(styles)(Banner)

