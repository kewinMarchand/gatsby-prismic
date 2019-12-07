import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import HomeSection from '../partials/home/HomeSection'
import TypeList from '../partials/home/TypeList'

import { Box } from '@material-ui/core'

const IndexPage = ({ data }) => {
  
  const homepage = data.prismic.allHomepages.edges.slice(0,1).pop()
  const pages = data.prismic.allPages.edges
  const articles = data.prismic.allArticles.edges
  const annexes = data.prismic.allAnnexes.edges
  
  return (
    <Layout doc={homepage}>
      <Box style={{marginBottom: 120}}>
        {homepage.node.sections.map((section, i) => {
            return (
              <HomeSection key={i} i={i} section={section}/>
            )
        })}
      </Box>
      <TypeList type={pages}/>
      <TypeList type={articles}/>
      <TypeList type={annexes}/>
    </Layout>
  )
}

export default IndexPage

	
export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          title
          bg_image
          sections {
            content
            image
            title
          }
          _meta {
            id
            type
            uid
          }
        }
      }
    }
    allPages {
      edges {
        node {
          title
          bg_image
          _meta {
            id
            type
            uid
          }
        }
      }
    }
    allArticles {
      edges {
        node {
          title
          bg_image
          _meta {
            id
            type
          }
        }
      }
    }
    allAnnexes {
      edges {
        node {
          title
          _meta {
            id
            type
          }
        }
      }
    }
  }
}
`