import React, { Fragment } from "react"
import { RichText } from 'prismic-reactjs'
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allPages(uid: $uid) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
}
`
 
const Page = props => {
  const doc = props.data.prismic.allPages.edges.slice(0,1).pop();
  if(!doc) return null;
  
  return (
    <Layout doc={doc}>
      <SEO title={RichText.asText(doc.node.title)} />
    <div>
      <Fragment>{RichText.render(doc.node.title)}</Fragment>
      <Fragment>{RichText.render(doc.node.description)}</Fragment>
    </div>
    </Layout>
  );
}
 
export default Page;