import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { Container, PostCard } from "../styles/page-styles/postList"

export default function Projects({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
  <PageLayout bigTitle="Projects">
    <Container>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <PostCard className="blog-post-preview" key={post.id}>
                <h3>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
                <p>{post.frontmatter.date}</p>
              </PostCard>
            )
          })}
      </Container>
  </PageLayout>)
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          id
        }
      }
    }
  }
`
