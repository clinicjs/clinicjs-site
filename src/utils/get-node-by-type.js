export default (edges, type) =>
  edges
    .map(item => item.node)
    .filter(item => item.frontmatter.type === type)
    .shift()
