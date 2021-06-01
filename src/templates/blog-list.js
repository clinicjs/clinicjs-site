import React from 'react'
import { graphql } from 'gatsby'
import config from '../../data/SiteConfig'
import Layout from '../layout/'
import PageSection from '../theme/components/atoms/PageSection'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import MarginResetChildren from '../theme/components/atoms/MarginResetChildren'
import CardGrid from '../theme/components/atoms/CardGrid'
import Card from '../theme/components/molecules/Card'
import Pagination from '../theme/components/molecules/Pagination'
import formatMinutes from '../utils/format-minutes'
import MetaData from '../components/MetaData'

const BlogListTemplate = ({ data, pathContext, location }) => {
  const blogPosts = data.posts.edges.map(item => item.node)

  return (
    <Layout location={location}>
      <PageSection lg>
        <ContentContainer>
          <MetaData titleParts={[config.pages.blogList.title]} />
          <MarginResetChildren>
            <h1>{config.pages.blogList.title}</h1>
            <CardGrid vertical>
              {blogPosts.map(item => (
                <Card
                  key={item.fields.slug}
                  to={item.fields.slug}
                  title={item.frontmatter.title}
                  imageUrl={item.frontmatter.hero}
                  meta={item.frontmatter.author}
                  subMeta={` | ${item.frontmatter.date} | ${formatMinutes(
                    item.timeToRead
                  )}`}
                  inline
                />
              ))}
            </CardGrid>
            {pathContext.paginationCount > 1 && (
              <Pagination
                nextPath={pathContext.nextPath}
                prevPath={pathContext.prevPath}
                current={pathContext.skip + 1}
                total={pathContext.paginationCount}
              />
            )}
          </MarginResetChildren>
        </ContentContainer>
      </PageSection>
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      skip: $skip
      limit: $limit
      filter: { fileAbsolutePath: { regex: "/blog/.*\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            author
            title
            date(formatString: "DD/MM/YYYY")
            hero
          }
        }
      }
    }
  }
`
