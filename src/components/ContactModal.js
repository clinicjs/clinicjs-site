import React from 'react'
import PropTypes from 'prop-types'
import HubspotForm from 'react-hubspot-form'
import Modal from '../theme/components/molecules/Modal'
import config from '../../data/SiteConfig'

class ContactModal extends React.Component {
  formRef = React.createRef()

  handleFormReady = () => {
    const { source } = this.props
    // Attempt to inject source into hidden field if it exists
    // to ensure all emails have an appropriate source so that marketing
    // which button opened the form
    try {
      this.formRef.current.el.querySelector('[name="other"]').value = source
      // Otherwise carry on
    } catch (e) {}
  }

  render = () => {
    const { onModalClose, modalTitle } = this.props
    const { hubSpot } = config

    return (
      <Modal onClose={onModalClose}>
        <h3>{modalTitle}</h3>
        <HubspotForm
          {...hubSpot}
          loading={<p>Loading...</p>}
          onReady={this.handleFormReady}
          ref={this.formRef}
        />
      </Modal>
    )
  }
}

ContactModal.propTypes = {
  modalTitle: PropTypes.string,
  source: PropTypes.string,
  onModalClose: PropTypes.func
}

ContactModal.defaultProps = {
  modalTitle: 'Contact us'
}

export default ContactModal
