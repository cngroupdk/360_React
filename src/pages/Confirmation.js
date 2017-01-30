import React, { Component } from 'react';

import { ConfirmationContainer } from '../components/common/assets/styles/Confirmation/ConfirmationContainer';
import { StyledLink } from '../components/common/assets/styles/StyledLink';

class Confirmation extends Component {
  constructor(props) {
    super(props);

    this.state = { confirmationWindowActive: true };

    this.closeConfirmationWindow = this.closeConfirmationWindow.bind(this);
  }

  opneConfrimationWindow() {
    this.setState({ confirmationWindowActive: true });
  }

  closeConfirmationWindow() {
    this.setState({ confirmationWindowActive: false })
  }

  render() {
    if (!this.state.confirmationWindowActive) { return null; }
    return (
      <ConfirmationContainer>
        <div className="confirmation">
          <h2>Please confirm</h2>
          <h4>Are you sure you want to continue?</h4>
          <div className="button-wrapper">
            <button className="akcept-button">Yes</button>
            <button className="cancel-button" onClick={this.closeConfirmationWindow}>No</button>
          </div>
        </div>
      </ConfirmationContainer>
    );
  }
}

export default Confirmation;
