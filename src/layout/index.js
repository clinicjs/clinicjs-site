import React from 'react'
import Theme from '../theme'
import SiteWrapper from '../theme/components/atoms/SiteWrapper'
import PageWrapper from '../theme/components/atoms/PageWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MetaData from '../components/MetaData'

const hasInvertedHeader = path => path.indexOf('/documentation') > -1

const Layout = ({ children, location }) => (
  <Theme>
    <SiteWrapper>
      <MetaData path={location.pathname} />
      <Header
        currentPath={location.pathname}
        inverted={hasInvertedHeader(location.pathname)}
      />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </SiteWrapper>
  </Theme>
)

export default Layout
