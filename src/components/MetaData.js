import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import defaultMeta from '../../data/meta-data'
import config from '../../data/SiteConfig'
import normalisePath from '../utils/normalise-path'

const urlCannonical = config.pathPrefix === '/' ? '' : config.pathPrefix

const generateTitle = titleParts => {
  if (!titleParts.length) {
    return defaultMeta.title
  }

  return titleParts.concat(defaultMeta.titleSuffix).join(' - ')
}

const generateMetaTags = (title, description, image, path) =>
  defaultMeta.metaTags.map(item => {
    // Override title
    if (item.name === 'twitter:title' || item.property === 'og:title') {
      return {
        ...item,
        content: title
      }
    }

    // Override description tags
    if (
      description &&
      (['description', 'twitter:description'].includes(item.name) ||
        item.property === 'og:description')
    ) {
      return {
        ...item,
        content: description
      }
    }

    // Override image
    if (
      image &&
      (item.name === 'twitter:image' || item.property === 'og:image')
    ) {
      const content = image.match(/(http(s)?):\/\//)
        ? image
        : [config.siteUrl, normalisePath(image)].join(urlCannonical)

      return {
        ...item,
        content
      }
    }

    // Override url
    if (path && item.property === 'og:url') {
      return {
        ...item,
        content: [config.siteUrl, normalisePath(path)].join(urlCannonical)
      }
    }

    return item
  })

const MetaData = ({ titleParts = [], description, image, path, children }) => {
  const title = generateTitle(titleParts)
  const metaTags = generateMetaTags(title, description, image, path).filter(
    item => {
      if (!path && item.property === 'og:url') {
        return false
      }

      return true
    }
  )

  return (
    <Helmet title={title}>
      <html lang="en" />
      {metaTags.map((props, i) => (
        <meta key={i} {...props} />
      ))}
      {children}
    </Helmet>
  )
}

MetaData.propTypes = {
  titleParts: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string
}

export default MetaData
