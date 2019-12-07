import React from "react"
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"

import { Box } from '@material-ui/core'

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
            <Box style={{marginBottom: 80, marginTop: 64}}>
                {RichText.render(doc.node.title)}
            </Box>
        </Layout>
    );
}
 
export default Annexe;