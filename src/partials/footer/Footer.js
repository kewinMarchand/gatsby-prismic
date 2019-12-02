import React from "react"
import PropTypes from "prop-types"

import ExternalLink from '../../components/ExternalLink'

const Footer = ({author}) => {
  return (
    <>
        <footer
            style={{
                background: `rebeccapurple`,
                color: '#FFF',
                padding: 24,
                textAlign: 'center'
            }}
        >
          <p>
            {new Date().getFullYear()}&nbsp;{author} 
          </p>
          <p>
            Fait pour&nbsp;<ExternalLink to={'https://prismic.io/'} label={'Prismic'}/>&nbsp;avec&nbsp;<ExternalLink to={'https://www.gatsbyjs.org'} label={'Gatsby'}/>
          </p>
        </footer>
    </>
  )
}

Footer.propTypes = {
  author: PropTypes.string
}

export default Footer
