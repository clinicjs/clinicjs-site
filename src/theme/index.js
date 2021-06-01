import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'normalize.css/normalize.css'
import './css/prism-okaidia.css'
import './css/index.css'
import variables from './variables'

let fontsLoaded = false
const fontLoadTimeout = 2000

class Theme extends React.Component {
  state = {
    fontsLoaded
  }

  componentDidMount = () => {
    if (!fontsLoaded) {
      const active = () => {
        fontsLoaded = true

        this.setState({
          fontsLoaded
        })

        clearTimeout(timeoutId)
      }

      const timeoutId = setTimeout(() => active(), fontLoadTimeout)

      // Ensure SSR succeeds
      try {
        if (window) {
          const WebFont = require('webfontloader')

          WebFont.load({
            timeout: fontLoadTimeout,
            custom: {
              families: ['Archia:n4,n7', 'Campton:n7', 'Space Mono:n4,n7'],
              urls: ['/assets/css/fonts.css']
            },
            active
          })
        }
      } catch (e) {}
    }
  }

  render = () => (
    <ThemeProvider theme={variables}>
      {this.state.fontsLoaded && this.props.children}
    </ThemeProvider>
  )
}

export default Theme
