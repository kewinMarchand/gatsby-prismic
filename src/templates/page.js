import React from "react"
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"

import { Box } from '@material-ui/core'

export const query = graphql`
    query PageQuery($uid: String) {
        prismic {
            allPages(uid: $uid) {
                edges {
                    node {
                        title
                        description
                        bg_image
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
            <Box style={{marginBottom: 80, marginTop: 64}}>
                {RichText.render(doc.node.description)}
            </Box>
        </Layout>
    );
}
 
export default Page;