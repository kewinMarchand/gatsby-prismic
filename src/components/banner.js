import React from "react"
import PropTypes from "prop-types"
import { RichText } from 'prismic-reactjs'

const Banner = ({ doc }) => {
    
    if(null === doc.node.bg_image || undefined === doc.node.bg_image) return null

    return (
        <div 
            style={{
                height: '30vmax', 
                width: '100%', 
                background: 'url(' + doc.node.bg_image.url +') 100%',
                backgroundSize: 'cover',
                marginBottom: 40
            }}
        >
            <div 
                style={{
                    backgroundColor: 'rgba(0, 0,0 , .15',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }}
            >
                {RichText.render(doc.node.title)}
            </div>    
        </div>
    )}
  
  Banner.propTypes = {
    doc: PropTypes.object,
  }
  
  Banner.defaultProps = {
    doc: ``,
  }
  
  export default Banner

