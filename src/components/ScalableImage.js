import React, { Component } from "react"
import PropTypes from "prop-types"

import { Grid, withStyles } from '@material-ui/core'

const styles = {
    listItemImage: {
        cursor: 'none',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform .4s ease-in-out 0s',
        width: '100%',
        opacity: 1,
        '&:hover': {
            //transform: 'scale(1.1)',
            transition: 'transform .8s ease-in-out .4s',
            '& + span': {
                opacity: 1
            }
        }
    },
    listItemImageContainer: {
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    listItemImageMagnifier: {
        background: 'transparent',
        borderRadius: 50,
        boxShadow: '1px 1px 5px #000',
        opacity: 0.4,
        overflow: 'hidden',
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
        this.setState({ coordinates: this.element.current.getBoundingClientRect() })
        
        // handleEvent est récupéré par le contexte
        this.element.current.addEventListener('mousemove', this)
        this.element.current.addEventListener('mouseleave', this)

        window.addEventListener("scroll", () => this.setScrollValue());
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.setScrollValue());
    }

    setScrollValue = () => {
        console.log('window.scrollY', window.scrollY)
        this.setState({ scroll: window.scrollY })
    }

    handleEvent(e) {
        let clientX, 
            clientY,
            coordinates = e.target.getBoundingClientRect()

        if('mousemove' === e.type) {
            clientX = e.clientX - coordinates.x
            clientY = e.clientY - coordinates.y
            this.setState({ clientX, clientY })
        }

      }

    render() {
        const {clientX, clientY, coordinates, magnifierSize, scroll} = this.state,
            {classes, url, title} = this.props
            
        return (
            <Grid container
                component={'div'}
                className={classes.listItemImageContainer}
                ref={this.element}
                style={{
                    height: coordinates ? coordinates.width * 0.5628205128205128 : 150
                }}
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
                        top: `${clientY - magnifierSize / 2}px`,
                        clipPath: 'circle(100%)'
                    }}
                >
                    <div
                        style={{
                            height: coordinates ? coordinates.width * 0.5628205128205128 : 150,
                            width: coordinates ? coordinates.width : '100%',
                            position: 'fixed',
                            left: coordinates ? coordinates.left : 0,
                            top: scroll && coordinates ? coordinates.top - scroll : 0,
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            className={classes.listItemImageMagnifierBackground}
                            src={url ? url : ''} 
                            alt={title ? title : ''}
                            style={{
                                objectFit: 'cover',
                                transform: 'scale(1)',
                                transformOrigin: 'center',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                </span>
            </Grid>
        )
    }
}

ScalableImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default withStyles(styles)(ScalableImage)