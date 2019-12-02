import React, { Fragment } from "react"
import { RichText } from 'prismic-reactjs'
import Layout from "../components/layout"

export const query = graphql`
query allAnnexesQuery($id: String) {
  prismic {
    allAnnexes(id: $id) {
      edges {
        node {
          title
          image
        }
      }
    }
  }
}
`
 
const Annexe = props => {
  const doc = props.data.prismic.allAnnexes.edges.slice(0,1).pop();
  if(!doc) return null;
  
  return (
    <Layout doc={doc}>
    <div>
      <Fragment>{RichText.render(doc.node.title)}</Fragment>
    </div>
    </Layout>
  );
}
 
export default Annexe;