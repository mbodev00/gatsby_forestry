import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <li>
                        {node.frontmatter.title}
                        <br/>
                        <Link to={node.frontmatter.path}>Read more</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}


export default Blog;


export const postsQuery = graphql`
    query BlogPosts {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        excerpt
                        content
                    }
                }
            }
        }
    }
`