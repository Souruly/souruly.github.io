import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { Container, PostCard, PostTitle } from "../styles/page-styles/postList"

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
                <PostTitle>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </PostTitle>
                <p>{post.frontmatter.date}</p>
              </PostCard>
            )
          })}
      </Container>
  </PageLayout>)
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___date, order: DESC}) {
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
