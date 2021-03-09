import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { Container, PostCard, PostTitle, PostDate, PostDescription } from "../styles/page-styles/postList"

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
                <PostTitle>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </PostTitle>
                <PostDate>{post.frontmatter.date}</PostDate>
                <hr></hr>
                <PostDescription>{post.frontmatter.description}</PostDescription>
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
            description
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
