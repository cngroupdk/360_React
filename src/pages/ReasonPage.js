import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectors } from '../selectors';

import ReasonEntry from '../components/ReasonEntry/ReasonEntry'
import { sendReason, whoIs } from '../components/ReasonEntry/ReasonPageActions';

class ReasonPage extends Component {
  static propTypes = {
    isError: PropTypes.bool,
    sendReason: PropTypes.func.isRequired,
    whoIs: PropTypes.func.isRequired,
    nextStep: PropTypes.string,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.whoIs(this.props.location.query.personId);
  }

  render() {
    const {
      sendReason,
      nextStep,
      person,
    } = this.props;

    return (
      <ReasonEntry
        person={person}
        sendReason={sendReason}
        nextStep={nextStep}
        personId={this.props.location.query.personId}
      />
    )
  }
}

function mapStateToProps(state) {
  const { getPerson, getNextStep, reasonIsError } = selectors.reasonPage;

  return {
    person: getPerson(state),
    nextStep: getNextStep(state),
    isError: reasonIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {sendReason, whoIs},
)(ReasonPage);
