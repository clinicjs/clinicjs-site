import React from 'react'
import StyledFooter from '../theme/components/molecules/Footer'

const navLinks = [
  {
    href: 'https://github.com/clinicjs/node-clinic/blob/master/LICENSE',
    children: 'MIT License'
  },
  {
    href:
      'https://github.com/clinicjs/node-clinic/blob/master/CODE_OF_CONDUCT.md',
    children: 'Code of Conduct'
  },
  {
    href: 'https://github.com/clinicjs/node-clinic/blob/master/CONTRIBUTING.md',
    children: 'Contributing'
  },
  {
    href: '/terms',
    children: 'Terms & Conditions'
  }
]

const gitHubUrl = 'https://github.com/clinicjs'
const rssUrl = '/rss.xml'

const Footer = () => (
  <StyledFooter
    {...{
      navLinks,
      gitHubUrl,
      rssUrl
    }}
  />
)

export default Footer
