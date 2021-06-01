import React from 'react'
import PropTypes from 'prop-types'
import ContentContainer from '../../atoms/ContentContainer'
import SideNav from '../../molecules/SideNav'
import { onScrollChange } from '../../../helpers/scroll'
import { Wrapper, Container } from './Outer'
import { Sidebar, SidebarStickyWrapper, SidebarInner } from './Sidebar'
import { Content, ContentInner } from './Content'

class SideNavTemplate extends React.Component {
  state = {
    hideSidebar: false,
    sideNavOpen: false
  }

  componentDidMount = () => {
    this.unregisterScrollChange = onScrollChange(this.handleScrollChange)
  }

  componentWillUnmount = () => {
    this.unregisterScrollChange()
  }

  handleNavToggle = sideNavOpen => {
    this.setState({
      sideNavOpen
    })
  }

  handleScrollChange = ({ direction }) => {
    this.setState({
      hideSidebar: direction === 'down' && !this.state.sideNavOpen
    })
  }

  render = () => {
    const { links, children } = this.props
    const { hideSidebar } = this.state

    return (
      <Wrapper>
        <Container>
          <Sidebar hide={hideSidebar}>
            <SidebarStickyWrapper>
              <SidebarInner>
                <SideNav links={links} onNavToggle={this.handleNavToggle} />
              </SidebarInner>
            </SidebarStickyWrapper>
          </Sidebar>
          <Content>
            <ContentInner>
              <ContentContainer noCenter noPadding>
                {children}
              </ContentContainer>
            </ContentInner>
          </Content>
        </Container>
      </Wrapper>
    )
  }
}

SideNavTemplate.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
}

export default SideNavTemplate
