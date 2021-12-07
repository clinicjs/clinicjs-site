import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import IconGitHub from '../../atoms/Icon/GitHub'
import IconRss from '../../atoms/Icon/Rss'
import { NavList } from './Nav'

const IconNavList = styled(NavList)`
  & li:not(:first-child) {
    margin-left: 1rem;
  }
`

const IconNav = ({ gitHubUrl, rssUrl }) => (
  <nav>
    <IconNavList>
      <li>
        <Link href={gitHubUrl} target="_blank" title="GitHub">
          <IconGitHub md fill="white" />
        </Link>
      </li>
      <li>
        <Link href={rssUrl} target="_blank" title="RSS">
          <IconRss md fill="white" />
        </Link>
      </li>
    </IconNavList>
  </nav>
)

export default IconNav
