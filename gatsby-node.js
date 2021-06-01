const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const express= require('express');
const webpackLodashPlugin = require('lodash-webpack-plugin')
const dirTree = require('directory-tree')
const config = require('./data/SiteConfig')
const normalisePath = require('./src/utils/normalise-path')
const redirects = require('./data/redirects')

function capitalizeWords(words) {
  return words
    .split(' ')
    .map(capitalizeWord)
    .join(' ')
}

function capitalizeWord(word) {
  const [head, ...tail] = word.split('')
  return [head.toUpperCase(), tail.join('')].join('')
}

function convertNames(name) {
  return name.replace(/.md/, '').replace(/(-|_)/g, ' ')
}

function parseTree(nodes, pathToReplace) {
  const item = {}
  const { path: nodePath, name, type, children } = nodes

  item.title = capitalizeWords(convertNames(name))

  if (type === 'directory') {
    const rootNode = children.find(child =>
      child.path.includes(`${nodePath}/index.md`)
    )

    /* handles index.md node, uses folder name, hoists up from children */
    if (rootNode) {
      item.entry = `.${rootNode.path.replace(pathToReplace, '')}`
      item.title = capitalizeWords(convertNames(nodePath.split('/').pop()))
    }

    item.links = children
      .filter(child => !child.name.includes('index'))
      .map(child => parseTree(child, pathToReplace))
  } else {
    item.entry = `.${nodePath.replace(pathToReplace, '')}`
    item.links = null
  }

  return item
}

function writeToFile(key, content) {
  fs.writeFile(
    `./content/${key}/${key}-tree.json`,
    JSON.stringify(content, null, 2),
    function(err) {
      if (err) {
        return console.log(err)
      }
    }
  )
}

exports.onPreBootstrap = () => {
  const contentPath = 'content'
  const tree = dirTree(`./${contentPath}`, {
    extensions: /\.md/,
    normalizePath: true
  })
  const groupedTree = _.groupBy(tree.children, 'name')

  Object.keys(groupedTree).forEach(key => {
    const tree = _.get(groupedTree, `${key}[0]`)
    const newTree = parseTree(tree, `${contentPath}/${key}`)

    writeToFile(key, newTree)
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    const directoryName = parsedFilePath.dir.split('/')[0]
    const templateName = node.frontmatter.template || directoryName
    let template = `${config.templateDir}${templateName}.js`

    if (!fs.existsSync(template)) {
      // eslint-disable-next-line no-console
      console.warn(
        '\nWARNING: No template set for ',
        template,
        '. Setting to default.js'
      )

      template = `${config.templateDir}default.js`
    }

    let slug = `/${parsedFilePath.dir}/`
    if (parsedFilePath.name !== 'index') {
      slug += `${parsedFilePath.name.replace(/_/g, '-')}/`
    }
    if (directoryName === 'blog') {
      slug = `/blog/${parsedFilePath.name}/`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
    createNodeField({
      node,
      name: 'template',
      value: template
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  Object.keys(redirects).forEach(fromPath => {
    // With trailing slash
    createRedirect({
      fromPath,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: redirects[fromPath]
    })

    // Without trailing slash
    createRedirect({
      fromPath: normalisePath(fromPath),
      isPermanent: true,
      redirectInBrowser: true,
      toPath: redirects[fromPath]
    })
  })

  return new Promise((resolve, reject) => {
    const allQuery = graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  template
                }
                fields {
                  slug
                  template
                }
              }
            }
          }
        }
      `
    )
    resolve(
      allQuery.then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: path.resolve(edge.node.fields.template),
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
        // Create blog pages
        const numberOfBlogPosts = result.data.allMarkdownRemark.edges.filter(
          e => e.node.fields.slug.includes('blog')
        ).length
        const postsPerPage = 10
        const paginationCount = Math.ceil(numberOfBlogPosts / postsPerPage)
        // Create paginated pages
        for (let p = 0; p < paginationCount; p++) {
          createPage({
            path: p === 0 ? '/blog' : `/blog/${p + 1}`,
            component: path.resolve('src/templates/blog-list.js'),
            context: {
              skip: p * postsPerPage,
              limit: postsPerPage,
              paginationCount,
              prevPath: p === 0 ? null : `/blog/${p === 1 ? '' : p}`,
              nextPath: p === paginationCount - 1 ? null : `/blog/${p + 2}`
            }
          })
        }
      })
    )
  })
}

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}
