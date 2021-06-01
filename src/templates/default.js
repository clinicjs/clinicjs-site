import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import MarkupContainer from '../theme/components/atoms/MarkupContainer'
import MetaData from '../components/MetaData'

const DefaultTemplate = ({ data, location }) => {
  const __html = data.postBySlug.html
  const frontmatter = data.postBySlug.frontmatter
  const metaData = frontmatter.metaData || {}

  if (!metaData.titleParts && frontmatter.title) {
    metaData.titleParts = [frontmatter.title]
  }

  return (
    <Layout location={location}>
      <PageSection lg>
        <ContentContainer>
          <MetaData {...metaData} />
          <MarkupContainer
            dangerouslySetInnerHTML={{
              __html
            }}
          />
        </ContentContainer>
      </PageSection>
    </Layout>
  )
}

export default DefaultTemplate

export const pageQuery = graphql`
  query ContentBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        metaData {
          titleParts
          description
          image
        }
      }
    }
  }
`
