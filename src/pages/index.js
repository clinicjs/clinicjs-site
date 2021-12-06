import React from 'react'
import { graphql } from 'gatsby'
import config from '../../data/SiteConfig'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import PageSectionTitle from '../theme/components/atoms/PageSectionTitle'
import ButtonGroup from '../theme/components/atoms/ButtonGroup'
import Button from '../theme/components/atoms/Button'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import CardGrid from '../theme/components/atoms/CardGrid'
import VideoIntro from '../theme/components/molecules/VideoIntro'
import ToolFunnel from '../theme/components/molecules/ToolFunnel'
import Card from '../theme/components/molecules/Card'
import Testimonial from '../theme/components/molecules/Testimonial'
import getNodeByType from '../utils/get-node-by-type'

const Index = ({ data, location }) => {
  const blogPosts = data.posts.edges.map(item => item.node)
  const tools = data.tools.edges.map(item => item.node)
  const pageConfig = config.pages.index
  const testimonial = getNodeByType(data.testimonials.edges, 'clinic')

  return (
    <Layout location={location}>
      <VideoIntro title={pageConfig.title} youTubeId={pageConfig.youTubeId}>
        <ButtonGroup>
          <Button to="/documentation/" primary>
            Get started
          </Button>
        </ButtonGroup>
      </VideoIntro>
      {tools.map((item, i) => (
        <ToolFunnel
          key={item.fields.slug}
          border={i > 0}
          type={item.frontmatter.type}
          title={item.frontmatter.title}
          description={item.frontmatter.subtitle}
          features={item.frontmatter.features}
          video={item.frontmatter.video}
          to={item.fields.slug}
        />
      ))}
      <PageSection isAlt lg>
        <ContentContainer>
          <PageSectionTitle>{pageConfig.blogSectionTitle}</PageSectionTitle>
          <CardGrid>
            {blogPosts.map(item => (
              <Card
                key={item.fields.slug}
                to={item.fields.slug}
                title={item.frontmatter.title}
                imageUrl={item.frontmatter.hero}
                meta={item.frontmatter.author}
              />
            ))}
          </CardGrid>
        </ContentContainer>
      </PageSection>
      {testimonial && 'quote' in testimonial.frontmatter && (
        <PageSection lg>
          <ContentContainer>
            <Testimonial noPadding {...testimonial.frontmatter} />
          </ContentContainer>
        </PageSection>
      )}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      skip: 0
      limit: 3
      filter: { fileAbsolutePath: { regex: "/blog/.*\\.md$/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            title
            hero
          }
        }
      }
    }
    tools: allMarkdownRemark(
      limit: 4
      filter: { frontmatter: { template: { eq: "tool"} } }
      sort: { fields: [frontmatter___priority], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            type
            title
            subtitle
            features
            video
          }
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
