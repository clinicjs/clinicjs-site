import React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import MarkupContainer from '../theme/components/atoms/MarkupContainer'
import Button from '../theme/components/atoms/Button'
import PadTop from '../theme/components/atoms/PadTop'
import ToolIntro from '../theme/components/molecules/ToolIntro'
import Testimonial from '../theme/components/molecules/Testimonial'
import { getAttributes } from '../theme/helpers/tool-attributes'
import MetaData from '../components/MetaData'
import getNodeByType from '../utils/get-node-by-type'

const ToolTemplate = ({ data, location }) => {
  const frontmatter = data.postBySlug.frontmatter
  const __html = data.postBySlug.html
  const { colour } = getAttributes(frontmatter.type)
  const testimonial = getNodeByType(data.testimonials.edges, frontmatter.type)
  const metaData = frontmatter.metaData || {}

  if (!metaData.titleParts && frontmatter.title) {
    metaData.titleParts = [frontmatter.title]
  }

  return (
    <Layout location={location}>
      <PageSection lg>
        <ContentContainer>
          <MetaData {...metaData} />
          <ToolIntro {...frontmatter} />
          <ThemeProvider theme={{ colourAccentPrimary: colour }}>
            <React.Fragment>
              <MarkupContainer
                dangerouslySetInnerHTML={{
                  __html
                }}
              />
              {frontmatter.cta && 'path' in frontmatter.cta && (
                <PadTop>
                  <Button block bold to={frontmatter.cta.path}>
                    {frontmatter.cta.label}
                  </Button>
                </PadTop>
              )}
              {testimonial && 'quote' in testimonial.frontmatter && (
                <Testimonial {...testimonial.frontmatter} />
              )}
            </React.Fragment>
          </ThemeProvider>
        </ContentContainer>
      </PageSection>
    </Layout>
  )
}

export default ToolTemplate

export const pageQuery = graphql`
  query ToolContentBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        subtitle
        exampleUrl
        gitHubUrl
        metaData {
          titleParts
          description
          image
        }
        cta {
          label
          path
        }
      }
    }
    testimonials: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/stubs/testimonial/" } } }
    ) {
      edges {
        node {
          frontmatter {
            type
            quote
            author
            image
          }
        }
      }
    }
  }
`
