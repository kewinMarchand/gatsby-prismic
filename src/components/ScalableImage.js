import React, { Component } from "react"
import PropTypes from "prop-types"

import { Grid, withStyles } from '@material-ui/core'

const styles = {
    listItemImage: {
        cursor: 'none',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform .8s ease-in-out 0s',
        width: '100%',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .8s ease-in-out .4s',
            '& + span': {
                opacity: 1
            }
        }
    },
    listItemImageContainer: {
        height: 150,
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    listItemImageMagnifier: {
        background: 'transparent',
        borderRadius: 50,
        boxShadow: '1px 1px 5px #000',
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute'
    }
};

class ScalableImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientX: 0, 
            clientY: 0,
            magnifierSize: 56
        }
        this.element = React.createRef()
    }

    componentDidMount() {
        // handleEvent est récupéré par le contexte
        this.element.current.addEventListener('mousemove', this)
        this.element.current.addEventListener('mouseleave', this)
    }

    handleEvent(e) {
        let clientX, 
            clientY, 
            coordinates = e.target.getBoundingClientRect()
            
        if('mouseleave' === e.type) {
            clientX = 0
            clientY = 0
        }

        if('mousemove' === e.type) {
            clientX = e.clientX - coordinates.x
            clientY = e.clientY - coordinates.y
        }

        this.setState({ clientX, clientY })
      }

    render() {
        const {clientX, clientY, magnifierSize} = this.state,
            {classes, url, title} = this.props

        return (
            <Grid container
                component={'div'}
                className={classes.listItemImageContainer}
                ref={this.element}
            >
                <img
                    className={classes.listItemImage}
                    src={url ? url : ''} 
                    alt={title ? title : ''}
                    style={{
                        objectPosition: `${'center'} ${'center'}`
                    }}
                />
                <span 
                    className={classes.listItemImageMagnifier}
                    style={{
                        height: magnifierSize,
                        width: magnifierSize,
                        left: `${clientX - magnifierSize / 2}px`,
                        top: `${clientY - magnifierSize / 2}px`
                    }}
                />
            </Grid>
        )
    }
}

ScalableImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default withStyles(styles)(ScalableImage)