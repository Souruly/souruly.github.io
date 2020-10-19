import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { Container, PostCard } from "../styles/page-styles/postList"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <PageLayout bigTitle="Blog">
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
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
