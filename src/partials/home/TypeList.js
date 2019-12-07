import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'

import ScalableImage from '../../components/ScalableImage'

import { Grid, Typography, withStyles } from '@material-ui/core'

const styles = {
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: 24
    },
    list: {
        listStyle: 'none', 
        marginLeft: 0,
        marginBottom: 80,
        width: '100%'
    },
    listItem: {
        border: '1px solid lightgrey',
        maxWidth: 600,
        minHeight: 200
    },
    listItemCaption: {
        flexShrink: 1,
        padding: 16
    },
    listItemCaptionText: {
        fontSize: '1.2rem'
    }
};

const TypeList = ({ classes, type }) => {

    
    if (null === type || undefined === type) return false;

    

    return (
        <Fragment>
            {type[0] && 
                <Typography variant={'h2'} 
                    className={classes.title}
                    gutterBottom
                >
                    Nos {type[0].node._meta.type}s
                </Typography>
            }
            <Grid container
                spacing={4}
                component={'ul'} 
                justify={'center'} 
                wrap={'wrap'}
                className={classes.list}
            >
                {type.map(doc => (
                    <Grid item 
                        xs={12} sm={6} md={6} lg={4} xl={3}
                        component={'li'}
                        key={doc.node._meta.id}
                    >
                        <Link to={linkResolver(doc.node._meta)}>
                            {doc.node.bg_image &&
                                <Grid container 
                                    component={'figure'}
                                    direction={'column'}
                                    className={classes.listItem}
                                >
                                    <ScalableImage
                                        url={doc.node.bg_image.url} 
                                        title={RichText.asText(doc.node.title)}
                                    />
                                    <Grid container
                                        component={'figcaption'}
                                        justify={'center'}
                                        className={classes.listItemCaption}
                                    >
                                        <Typography variant={'h3'} 
                                            className={classes.listItemCaptionText}
                                        >
                                            {RichText.asText(doc.node.title)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            }
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    )
}

TypeList.propTypes = {
  type: PropTypes.array.isRequired
}

export default withStyles(styles)(TypeList)