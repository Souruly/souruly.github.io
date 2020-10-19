import React from "react"
import { PageLayout } from "../components"
import { Link, graphql } from "gatsby"
import { PostList, PostListItem } from "../styles/page-styles/postList"

export default function How({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <PageLayout bigTitle="Notes">
      <PostList>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <PostListItem className="blog-post-preview" key={post.id}>
                  <p>
                  {post.frontmatter.date} | &nbsp;
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </p>
                {/* <h2>{post.frontmatter.date}</h2> */}
                {/* <p>{post.excerpt}</p> */}
              </PostListItem>
            )
          })}
      </PostList>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/notes/" } }) {
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
