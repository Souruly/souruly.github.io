import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import {
  PostTitle,
  PostSubTitle,
  PostContent,
} from "../styles/template-styles/general-post-template"

const SubTitle = ({ ttr, date, type }) => (
  <PostSubTitle>
    <li>Time to read: {ttr} min</li>
    <li>Category : {type}</li>
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
        type={post.frontmatter.type}
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
        type
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
