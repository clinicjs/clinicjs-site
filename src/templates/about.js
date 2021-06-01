import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import MarkupContainer from '../theme/components/atoms/MarkupContainer'
import MarginResetChildren from '../theme/components/atoms/MarginResetChildren'
import Team from '../theme/components/molecules/Team'
import Button from '../theme/components/atoms/Button'
import PadTop from '../theme/components/atoms/PadTop'
import MetaData from '../components/MetaData'

const AboutTemplate = ({ data, location }) => {
  const htmlParts = data.postBySlug.html.split('<template data-team />')
  const __html = htmlParts.shift()
  const frontmatter = data.postBySlug.frontmatter
  const metaData = frontmatter.metaData || {}

  if (!metaData.titleParts && frontmatter.title) {
    metaData.titleParts = [frontmatter.title]
  }

  // Hoist team member frontmatter from each node
  let teamMembers = []

  if (data.team) {
    teamMembers = data.team.edges.map(item => item.node.frontmatter)
  }

  return (
    <Layout location={location}>
      <PageSection lg>
        <ContentContainer>
          <MetaData {...metaData} />
          <MarkupContainer>
            <MarginResetChildren
              dangerouslySetInnerHTML={{
                __html
              }}
            />
            {htmlParts.length > 0 && (
              <React.Fragment>
                {teamMembers.length > 0 && (
                  <Team
                    teamMembers={teamMembers}
                    title={frontmatter.teamSectionTitle}
                  />
                )}
                {htmlParts.map((__html, i) => (
                  <MarginResetChildren
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html
                    }}
                  />
                ))}
              </React.Fragment>
            )}
            {frontmatter.cta && 'path' in frontmatter.cta && (
              <PadTop>
                <Button block bold href={frontmatter.cta.path}>
                  {frontmatter.cta.label}
                </Button>
              </PadTop>
            )}
          </MarkupContainer>
        </ContentContainer>
      </PageSection>
    </Layout>
  )
}

export default AboutTemplate

export const pageQuery = graphql`
  query AboutContentBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        teamSectionTitle
        cta {
          path
          label
        }
        metaData {
          titleParts
          description
          image
        }
      }
    }
    team: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/stubs/team/" } } }
      sort: { fields: [frontmatter___priority], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            gitHubUrl
            linkedInUrl
            twitterUrl
          }
        }
      }
    }
  }
`
