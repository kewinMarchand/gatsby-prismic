import React from "react"
import PropTypes from "prop-types"
import { RichText } from 'prismic-reactjs'

const Banner = ({ title, bg_image }) => {

    return (
        <div 
            style={{
                height: '30vmax', 
                width: '100%', 
                background: 'url(' + bg_image.url +') 100%',
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
                {RichText.render(title)}
            </div>    
        </div>
    )}
  
  Banner.propTypes = {
    title: PropTypes.string.isRequired,
    bg_image: PropTypes.string.isRequired
  }
  
  Banner.defaultProps = {

  }
  
  export default Banner

