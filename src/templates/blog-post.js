import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  console.log(data)
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h3>{post.frontmatter.title}</h3>
      <small>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </small>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        author
      }
    }
  }
`
