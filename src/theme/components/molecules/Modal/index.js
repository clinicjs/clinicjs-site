import React from 'react'
import PropTypes from 'prop-types'
import MarginResetChildren from '../../atoms/MarginResetChildren'
import Outer, { FADE_DURATION } from './Outer'
import Backdrop from './Backdrop'
import Overlay from './Overlay'
import { Close, CloseIcon } from './Close'
import { enableScroll, disableScroll } from '../../../helpers/scroll'

class Modal extends React.Component {
  state = {
    active: false
  }

  componentDidMount = () => {
    this.toggleModal(true)
    disableScroll()
    window.addEventListener('keyup', this.handleEscapeButton.bind(this))
  }

  componentWillUnmount = () => {
    enableScroll()
    window.removeEventListener('keyup', this.handleEscapeButton.bind(this))
    clearTimeout(this.timeoutId)
  }

  handleEscapeButton = e => {
    // On escape, close modal
    if (e && e.keyCode === 27) {
      this.handleClose(e)
    }
  }

  handleClose = e => {
    if (this.state.active) {
      e.preventDefault()
      this.toggleModal(false, this.props.onClose)
    }
  }

  toggleModal = (active, done) => {
    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.setState(
        {
          active
        },
        () => {
          if (done) {
            setTimeout(() => done(), FADE_DURATION)
          }
        }
      )
    }, FADE_DURATION)
  }

  render = () => {
    const { children } = this.props
    const { active } = this.state

    return (
      <Outer active={active}>
        <Backdrop onClick={this.handleClose} />
        <Overlay role="dialog" aria-modal="true" active={active}>
          <MarginResetChildren>{children}</MarginResetChildren>
          <Close onClick={this.handleClose}>
            Close
            <CloseIcon />
          </Close>
        </Overlay>
      </Outer>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func
}

export default Modal
