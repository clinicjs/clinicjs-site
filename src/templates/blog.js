import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import MarkupContainer from '../theme/components/atoms/MarkupContainer'
import MarginResetChildren from '../theme/components/atoms/MarginResetChildren'
import Meta from '../theme/components/atoms/Meta'
import Muted from '../theme/components/atoms/Muted'
import formatMinutes from '../utils/format-minutes'
import MetaData from '../components/MetaData'

const DefaultTemplate = ({ data, location }) => {
  const { timeToRead, html, frontmatter } = data.postBySlug
  const { title, author, date } = frontmatter
  const metaData = frontmatter.metaData || {}

  if (!metaData.titleParts && frontmatter.title) {
    metaData.titleParts = [frontmatter.title]
  }

  return (
    <Layout location={location}>
      <PageSection lg>
        <ContentContainer>
          <MetaData {...metaData} />
          <MarkupContainer>
            <MarginResetChildren>
              <h1>{title}</h1>
            </MarginResetChildren>
            <Meta>
              {author}
              <Muted>
                {' '}
                | {date} | {formatMinutes(timeToRead)}
              </Muted>
            </Meta>
            <MarginResetChildren
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />
          </MarkupContainer>
        </ContentContainer>
      </PageSection>
    </Layout>
  )
}

export default DefaultTemplate

export const pageQuery = graphql`
  query BlogPostsBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        author
        date(formatString: "DD/MM/YYYY")
        metaData {
          titleParts
          description
          image
        }
      }
    }
  }
`
