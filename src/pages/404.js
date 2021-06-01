import React from 'react'
import Layout from '../layout/'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import PageSection from '../theme/components/atoms/PageSection'
import Link from '../theme/components/atoms/Link'
import config from '../../data/SiteConfig'

const StyleGuide = ({ data, location }) => (
  <Layout location={location}>
    <PageSection lg>
      <ContentContainer>
        <h1>{config.pages.notFound.title}</h1>
        <p>
          <Link to="/">{config.pages.notFound.homepageLinkText}</Link>
        </p>
      </ContentContainer>
    </PageSection>
  </Layout>
)

export default StyleGuide
