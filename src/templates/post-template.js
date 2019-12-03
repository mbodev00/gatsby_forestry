import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Img from 'gatsby-image'

const Template = ({data}) => {

    const { title, excerpt, content, thumbnail } = data.markdownRemark.frontmatter;

    console.log(thumbnail);

    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <p>{excerpt}</p>
                <img src={thumbnail} />
                <p>{content}</p>
            </div>
        </Layout>
    )
}


export default Template;


export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            frontmatter {
                path
                title
                excerpt
                content,
                thumbnail
            }
        }
    }
`
