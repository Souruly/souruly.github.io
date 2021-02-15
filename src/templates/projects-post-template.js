import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import {
  PostTitle,
  PostSubTitle,
  PostContent,
  PostPage,
  PostPageHeader,
} from "../styles/template-styles/general-post-template"
import { Link } from "gatsby"

const SubTitle = ({ ttr, date, author }) => (
  <PostSubTitle>
    <li>Time to read: {ttr} min</li>
    <li>{date}</li>
    <li>{author}</li>
  </PostSubTitle>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PageLayout title="Project Post">
      <PostPage>
        <p>
          <Link to="/projects">Back to All Posts</Link>
        </p>

        <PostPageHeader>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <SubTitle
            ttr={post.timeToRead}
            date={post.frontmatter.date}
            author={post.frontmatter.author}
          />
        </PostPageHeader>

        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostPage>
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
