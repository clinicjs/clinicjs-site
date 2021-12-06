const config = require('./SiteConfig')

// This is called by MetaData component as the default meta data for SEO
module.exports = {
  // Default <title />
  title:
    'Clinic.js - An Open Source Node.js performance profiling suite by NearForm',
  // Appended to the end of all custom titles (with - separator)
  titleSuffix: 'Clinic.js',
  // Programatically creates <meta name="KEY" content="VALUE" /> by iterating through object
  metaTags: [
    {
      name: 'description',
      content:
        'Clinic.js is a suite of tools to help diagnose and pinpoint your Node.js performance issues.'
    },
    {
      name: 'twitter:description',
      content:
        'Clinic.js is a suite of tools to help diagnose and pinpoint your Node.js performance issues.'
    },
    {
      property: 'og:description',
      content:
        'Clinic.js is a suite of tools to help diagnose and pinpoint your Node.js performance issues.'
    },
    {
      name: 'twitter:title',
      content:
        'Clinic.js - An Open Source Node.js performance profiling suite by NearForm'
    },
    {
      property: 'og:title',
      content:
        'Clinic.js - An Open Source Node.js performance profiling suite by NearForm'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:creator',
      content: '@NearForm'
    },
    {
      name: 'twitter:site',
      content: '@NearForm'
    },
    {
      property: 'og:image',
      content: `${config.siteUrl}${
        config.pathPrefix
      }assets/images/clinic-social-media-image.png`
    },
    {
      name: 'twitter:image',
      content: `${config.siteUrl}${
        config.pathPrefix
      }assets/images/clinic-social-media-image.png`
    },
    {
      property: 'og:url',
      content: `${config.siteUrl}${config.pathPrefix}`
    }
  ]
}
