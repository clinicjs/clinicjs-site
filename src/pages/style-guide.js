import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../layout/'
import ContentContainer from '../theme/components/atoms/ContentContainer'
import PageSection from '../theme/components/atoms/PageSection'
import IconClinic from '../theme/components/atoms/Icon/Clinic'
import IconDoctor from '../theme/components/atoms/Icon/Doctor'
import IconBubbleprof from '../theme/components/atoms/Icon/Bubbleprof'
import IconFlame from '../theme/components/atoms/Icon/Flame'
import IconArrow from '../theme/components/atoms/Icon/Arrow'
import Button from '../theme/components/atoms/Button'
import ButtonGroup from '../theme/components/atoms/ButtonGroup'
import variables from '../theme/variables'

const colourAccentPrimary = variables.colour.brand.doctor

const StyleGuide = ({ data, location }) => (
  <Layout location={location}>
    <PageSection lg>
      <ContentContainer>
        <code>Typography</code>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodoconsequat. <b>Duis</b> aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu <i>fugiat</i>{' '}
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui <a href="#0">officia</a> deserunt mollit anim id est
          laborum.
        </p>

        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>
            List item 5
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
              <li>List item 5</li>
            </ul>
          </li>
        </ul>

        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>
            List item 5
            <ol>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
              <li>List item 5</li>
            </ol>
          </li>
        </ol>

        <code>Icons</code>
        <p>
          <IconClinic xl />
          &nbsp;&nbsp;
          <IconDoctor xl />
          &nbsp;&nbsp;
          <IconBubbleprof xl />
          &nbsp;&nbsp;
          <IconFlame xl />
        </p>
        <p>
          <IconArrow />
        </p>

        <code>Buttons</code>
        <ButtonGroup>
          <Button>Button</Button>
          <Button href="#0">Anchor</Button>
          <Button to="/">Link</Button>
          <ThemeProvider
            theme={{
              colourAccentPrimary
            }}
          >
            <Button href="#0">Themed</Button>
          </ThemeProvider>
        </ButtonGroup>
        <ButtonGroup>
          <Button primary>Button</Button>
          <Button primary href="#0">
            Anchor
          </Button>
          <Button primary to="/">
            Link
          </Button>
          <ThemeProvider
            theme={{
              colourAccentPrimary
            }}
          >
            <Button primary href="#0">
              Themed
            </Button>
          </ThemeProvider>
        </ButtonGroup>
        <ButtonGroup>
          <Button block href="#0">
            Block
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button block bold href="#0">
            Block (bold)
          </Button>
        </ButtonGroup>
      </ContentContainer>
    </PageSection>
  </Layout>
)

export default StyleGuide
