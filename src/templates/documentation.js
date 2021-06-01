import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Layout from '../layout/'
// eslint-disable-next-line no-unused-vars
import EntryFragment from '../utils/entry-fragment'
import normalisePath from '../utils/normalise-path'
import MarkupContainer from '../theme/components/atoms/MarkupContainer'
import MarginResetChildren from '../theme/components/atoms/MarginResetChildren'
import SideNavTemplate from '../theme/components/templates/SideNav'
import MetaData from '../components/MetaData'

const getTitle = item => {
  // Attempt pulling title from frontmatter
  try {
    const frontmatterTitle = item.entry.childMarkdownRemark.frontmatter.title

    if (frontmatterTitle) {
      return frontmatterTitle
    }
  } catch (e) {}

  // Attempt pulling title from HTML
  try {
    const htmlTitle = item.entry.childMarkdownRemark.htmlAst.children
      .filter(child => child.tagName === 'h1')[0]
      .children.filter(child => child.type === 'text')[0].value

    if (htmlTitle) {
      return htmlTitle
    }
  } catch (e) {}

  return item.title
}

const orderLinks = links => {
  try {
    return sortBy(
      links,
      item => item.entry.childMarkdownRemark.frontmatter.priority
    )
  } catch (e) {
    return links
  }
}

const formatLinkItem = (item, currentPath, links = []) => ({
  active:
    normalisePath(item.entry.childMarkdownRemark.fields.slug) ===
    normalisePath(currentPath),
  path: item.entry.childMarkdownRemark.fields.slug,
  label: getTitle(item),
  links
})

const formatLinks = (tree, currentPath) => {
  return [formatLinkItem(tree, currentPath)].concat(
    orderLinks(tree.links || []).map(item =>
      formatLinkItem(
        item,
        currentPath,
        orderLinks(item.links || []).map(item =>
          formatLinkItem(item, currentPath)
        )
      )
    )
  )
}

const DocumentationTemplate = ({ data, location }) => {
  const __html = data.postBySlug.html
  const frontmatter = data.postBySlug.frontmatter
  const links = formatLinks(data.tableOfContents, location.pathname)
  const metaData = frontmatter.metaData || {}

  if (!metaData.titleParts && frontmatter.title) {
    metaData.titleParts = [frontmatter.title]
  }

  return (
    <Layout location={location}>
      <SideNavTemplate links={links}>
        <MetaData {...metaData} />
        <MarkupContainer>
          <MarginResetChildren
            dangerouslySetInnerHTML={{
              __html
            }}
          />
        </MarkupContainer>
      </SideNavTemplate>
    </Layout>
  )
}

export default DocumentationTemplate

export const pageQuery = graphql`
  query DocumentationContentBySlug($slug: String!) {
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
    tableOfContents: documentationJson {
      title
      entry {
        ...EntryFragment
      }
      links {
        title
        entry {
          ...EntryFragment
        }
        links {
          title
          entry {
            ...EntryFragment
          }
        }
      }
    }
  }
`
