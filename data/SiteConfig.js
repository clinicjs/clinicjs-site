module.exports = {
  // Tells Gatsby where templates live.
  templateDir: 'src/templates/',
  // Site title.
  siteTitle: 'Tools to help diagnose and pinpoint Node.js performance issues',
  // Site URL for meta data and Gatsby config.
  siteUrl: 'https://clinicjs.org',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  pathPrefix: '/',
  // Website description used for RSS feeds/meta description tag.
  siteDescription:
    'Clinic.js is a suite of tools to help diagnose and pinpoint your Node.js performance issues.',
  // Path to the RSS file.
  siteRss: '/rss.xml',
  // GA tracking ID.
  googleAnalyticsID: 'UA-29381785-6 ',
  // Username to display in the author segment.
  userName: 'NearFormers',
  // Copyright string for the footer of the website and RSS feed.
  copyright: 'Copyright © 2019 NearForm',
  // RSS feed icon
  rssImage: '/assets/images/clinic.png',
  // Used for setting manifest color for PWA chrome.
  themeColor: '#0058D5',
  // Used for setting manifest background color.
  backgroundColor: '#ffffff',

  // Hubspot specific config
  hubSpot: {
    portalId: '1964953',
    formId: '159bbb48-dccd-4912-9307-93eee32f8c3d'
  },

  // Page specific content.
  pages: {
    // Homepage.
    index: {
      // Hero title.
      title: 'Tools to help diagnose and pinpoint Node.js performance issues',
      // Hero video YouTubeId
      youTubeId: 'KvVCafGmrWA',
      // Bottom section showing latests posts.
      blogSectionTitle: 'Latest blog posts'
    },

    // Blog archive page.
    blogList: {
      // Heading.
      title: 'Blog'
    },

    // 404.
    notFound: {
      // Heading.
      title: 'Page not found',
      // Link text.
      homepageLinkText: 'Back to homepage'
    }
  }
}
