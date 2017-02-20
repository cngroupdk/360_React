import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ConfirmationContainer } from '../components/common/assets/styles/Confirmation/ConfirmationContainer';
import { closeModal, proceedModal } from '../components/Confirmation/ConfrimationModalAction';
import { selectors } from '../selectors';

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);

    this.proceedToPage = this.proceedToPage.bind(this);
    this.closeConfirmationModal = this.closeConfirmationModal.bind(this);
  }

  proceedToPage() {
    this.props.proceedModal();
    this.closeConfirmationModal();
  }

  closeConfirmationModal() {
    this.props.closeModal();
  }

  render() {
    if (!this.props.isModalOpened) { return null; }

    return (
      <ConfirmationContainer>
        <div className="confirmation">
          <h2>Please confirm</h2>
          <h4>Are you sure you want to continue?</h4>
          <div className="button-wrapper">
            <button className="akcept-button" onClick={this.proceedToPage}>Proceed</button>
            <button className="cancel-button" onClick={this.closeConfirmationModal}>Cancel</button>
          </div>
        </div>
      </ConfirmationContainer>
    );
  }
}

function mapStateToProps(state) {
  const { getModalState } = selectors.confirmationModal;

  return {
    isModalOpened: getModalState(state),
  };
}

export default connect(
  mapStateToProps,
  {
    closeModal,
    proceedModal,
  },
)(ConfirmationModal);
