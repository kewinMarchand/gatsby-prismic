import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'

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
        marginBottom: 80
    },
    listItem: {
        border: '1px solid lightgrey',
        maxWidth: 300,
        minHeight: 200
    },
    listItemImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 150,
        width: '100%'
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
                        xs={12} md={6} lg={4} xl={3}
                        align={'center'}
                        key={doc.node._meta.id}
                    >
                        <Link to={linkResolver(doc.node._meta)}>
                            {doc.node.bg_image &&
                                <Grid container 
                                    component={'figure'}
                                    direction={'column'}
                                    className={classes.listItem}
                                >
                                    <Grid container 
                                        className={classes.listItemImage}
                                        style={{backgroundImage: 'url(' + doc.node.bg_image.url + ')'}}
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
  type: PropTypes.string.isRequired
}

export default withStyles(styles)(TypeList)