import React, { Fragment } from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { rawRequest } from "graphql-request"

const TypeList = (type) => {
  if (null === type.type || undefined === type.type) return false;

  return (
    <Fragment>
      <h3>Nos {type.type[0].node._meta.type}s</h3>
      <ul>
        {type.type.map(doc => (
          <li key={doc.node._meta.id}>
            <Link to={linkResolver(doc.node._meta)}>
              {RichText.asText(doc.node.title)}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

const IndexPage = ({ data }) => {
  
  const homepage = data.prismic.allHomepages.edges.slice(0,1).pop()
  const pages = data.prismic.allPages.edges
  const articles = data.prismic.allArticles.edges
  const annexes = data.prismic.allAnnexes.edges
  
  return (
    <Layout doc={homepage}>
      {homepage.node.sections.map((section, i) => {
          return (
            <div id={i}
              style={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: i % 2 ? 'row' : 'row-reverse',
                flexWrap: 'wrap'
              }}
            >
              <div style={{maxWidth: 600, width: '100%'}}>
                <Fragment>{RichText.render(section.title)}</Fragment>
                <Fragment>{RichText.render(section.content)}</Fragment>
              </div>
              <figure style={{minWidth: 96,  maxWidth: 300}}>
                <img 
                  src={section.image.url} 
                  alt={null !== section.image.alt ? section.image.alt : RichText.asText(section.title)}       
                  width={section.image.dimensions.width}
                />
              </figure>
          </div>
          )
      })}
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