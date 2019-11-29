import React, { Fragment } from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'

const TypeList = (type) => {
  if (null === type.type || undefined === type.type[0]) return false;

  return (
    <Fragment>
      {type.type[0] && 
        <h2 
          style={{
            textAlign: 'center',
            marginBottom: 24
          }}
        >
          Nos {type.type[0].node._meta.type}s
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
        {type.type.map(doc => (
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

const IndexPage = ({ data }) => {
  
  const homepage = data.prismic.allHomepages.edges.slice(0,1).pop()
  const pages = data.prismic.allPages.edges
  const articles = data.prismic.allArticles.edges
  const annexes = data.prismic.allAnnexes.edges
  
  return (
    <Layout doc={homepage}>
      <div style={{marginBottom: 120}}>
        {homepage.node.sections.map((section, i) => {
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
        })}
      </div>
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