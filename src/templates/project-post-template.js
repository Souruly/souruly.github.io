import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Time to read: {ttr} <small>min</small> | {date} | {author}
  </h5>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PageLayout title="Project Post">
      <h1>{post.frontmatter.title}</h1>

      <SubTitle
        ttr={post.timeToRead}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
