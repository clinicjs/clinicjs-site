import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaGithub, FaLinkedinSquare, FaTwitter } from 'react-icons/lib/fa'
import Link from '../../atoms/Link'

const Outer = styled.div`
  text-align: center;
  grid-column: span 2;

  &:first-child,
  &:nth-child(8n) {
    grid-column: 2 / span 2;
  }
`

const Title = styled.h4`
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-family: ${props => props.theme.font.family.sans};
  font-weight: ${props => props.theme.font.weight.normal};
`

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const LinkListLink = styled(Link)`
  display: inline-block;
  margin: 0 0.25em;
  padding: 0.125em;
  font-size: 1.5rem;
  line-height: 1;
`

const Image = ({ src, id }) => (
  <svg viewBox="0 0 230 230">
    <defs>
      <clipPath id={`hexagonal-mask-${id}`}>
        <path d="M9.8,75c-1.8,26.7-1.8,53.4,0,80.1c0.6,9.3,6.8,18.5,15.7,24c26.4,15.9,52.4,32.3,76.7,47.2c8.1,5,17.6,5,25.7,0c24.3-14.9,50.3-31.3,76.7-47.2c9-5.5,15.1-14.7,15.7-24c1.8-26.7,1.8-53.4,0-80.1c-0.6-9.3-6.8-18.5-15.7-24c-26.4-16.1-52.4-32.3-76.7-47.2c-8.1-5-17.6-5-25.7,0C77.8,18.6,51.9,35.1,25.5,51C16.6,56.6,10.4,65.7,9.8,75z" />
      </clipPath>
    </defs>
    <g
      dangerouslySetInnerHTML={{
        __html: `<image clip-path="url(#hexagonal-mask-${id})" height="100%" width="100%" xlink:href="${src}" />`
      }}
    />
  </svg>
)

const Member = ({ id, title, image, gitHubUrl, linkedInUrl, twitterUrl }) => (
  <Outer>
    <Image src={image} id={id} />
    <Title>{title}</Title>
    <LinkList>
      {Boolean(twitterUrl) && (
        <li>
          <LinkListLink href={twitterUrl} title={`Follow ${title} on Twitter`}>
            <FaTwitter />
          </LinkListLink>
        </li>
      )}
      {Boolean(linkedInUrl) && (
        <li>
          <LinkListLink
            href={linkedInUrl}
            title={`Connect with ${title} on LinkedIn`}
          >
            <FaLinkedinSquare />
          </LinkListLink>
        </li>
      )}
      {Boolean(gitHubUrl) && (
        <li>
          <LinkListLink href={gitHubUrl} title={`Follow ${title} on GitHub`}>
            <FaGithub />
          </LinkListLink>
        </li>
      )}
    </LinkList>
  </Outer>
)

Member.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  gitHubUrl: PropTypes.string,
  linkedInUrl: PropTypes.string,
  twitterUrl: PropTypes.string
}

export default Member
