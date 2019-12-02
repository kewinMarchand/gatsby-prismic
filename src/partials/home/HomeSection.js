import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { RichText } from 'prismic-reactjs'

const HomeSection = ({ i, section }) => {
  
    return (
        <section key={i}
            style={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: i % 2 ? 'row' : 'row-reverse',
                flexWrap: 'wrap',
                marginBottom: 40
            }}
        >
        <div 
            style={{
            maxWidth: 600,
            padding: 16,
            width: '100%'
            }}
        >
            <header style={{paddingBottom: 16}}>
                {RichText.render(section.title)}
            </header>
            <Fragment>{RichText.render(section.content)}</Fragment>
        </div>
        <figure 
            style={{
            minWidth: 96,  
            maxWidth: 296,
            margin: 16
            }}
        >
            <img 
                src={section.image.url} 
                alt={null !== section.image.alt ? section.image.alt : RichText.asText(section.title)}       
                width={section.image.dimensions.width}
            />
        </figure>
    </section>   
  )
}

HomeSection.propTypes = {
    i: PropTypes.string.isRequired,
    section: PropTypes.node.isRequired
}

export default HomeSection
