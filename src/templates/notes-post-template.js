import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import {
  PostTitle,
  PostSubTitle,
  PostContent,
} from "../styles/template-styles/general-post-template"

const SubTitle = ({ ttr, date, author }) => (
  <PostSubTitle>
    <li>{date}</li>
  </PostSubTitle>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PageLayout title="'How I' -  Post">
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <SubTitle
        ttr={post.timeToRead}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />

      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </PageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
