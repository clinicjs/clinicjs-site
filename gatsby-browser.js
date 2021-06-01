import reactGa from 'react-ga'
import config from './data/SiteConfig.js'

const isLiveSite = () => window.location.origin.indexOf(config.siteUrl) > -1

// Conditionally add GA to website based on domain
if (isLiveSite()) {
  reactGa.initialize(config.googleAnalyticsID)
}

export const onRouteUpdate = state => {
  if (isLiveSite()) {
    reactGa.pageview(state.location.pathname)
  }
}

export const onInitialClientRender = () => {
  // Because video heights aren't always calculated correctly by the browser
  // we manually focus the window on the hash-targeted element when the video
  // is ready to play
  const $videos = document.querySelectorAll('video')
  const hash = window.location.hash.split('#').pop()

  if ($videos.length && hash) {
    const $target = document.getElementById(hash)

    if ($target) {
      $videos[$videos.length - 1].addEventListener('canplay', () => {
        $target.scrollIntoView()
      })
    }
  }
}
