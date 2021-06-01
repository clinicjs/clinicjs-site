import { graphql } from 'gatsby'

export const EntryFragment = graphql`
  fragment EntryFragment on File {
    id
    childMarkdownRemark {
      htmlAst
      fields {
        slug
        template
      }
      frontmatter {
        title
        priority
      }
    }
  }
`
