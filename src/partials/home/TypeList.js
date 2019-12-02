import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'

const TypeList = ({type}) => {
  if (null === type || undefined === type) return false;

  return (
    <Fragment>
      {type[0] && 
        <h2 
          style={{
            textAlign: 'center',
            marginBottom: 24
          }}
        >
          Nos {type[0].node._meta.type}s
        </h2>
      }
      <ul 
        style={{
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          listStyle: 'none', 
          marginLeft: 0,
          marginBottom: 80
        }}
      >
        {type.map(doc => (
          <li key={doc.node._meta.id} style={{width: 300, margin: 16}}>
            <Link to={linkResolver(doc.node._meta)}>
              {doc.node.bg_image &&
                <figure 
                  style={{
                    border: '1px solid lightgrey',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 200
                  }}
                >
                  <div
                    style={{
                      backgroundImage: 'url(' + doc.node.bg_image.url + ')',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      height: 150,
                      width: '100%'
                    }}
                  ></div>
                  <figcaption 
                    style={{
                      flexShrink: 1,
                      textAlign: 'center',
                      padding: 16
                    }}
                  >
                    <h3>{RichText.asText(doc.node.title)}</h3>
                  </figcaption>
                </figure>
              }
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

TypeList.propTypes = {
  type: PropTypes.string.isRequired
}

export default TypeList