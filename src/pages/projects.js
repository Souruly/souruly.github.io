import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { Container, PostCard, PostTitle, PostDate, PostDescription, Star } from "../styles/page-styles/postList"

export default function Projects({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
  <PageLayout bigTitle="Projects">
    <Container>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <PostCard className="projects-post-preview" key={post.id}>
                {post.frontmatter.priority==="starred" ? <Star /> : <></>}
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
            description
            priority
          }
          id
        }
      }
    }
  }
`
