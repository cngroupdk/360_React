import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectors } from '../../selectors';

import ReasonEntry from '../../components/ReasonLevelAssessmentWrapper/ReasonEntry/ReasonEntry'
import { sendReason } from '../../components/ReasonLevelAssessmentWrapper/ReasonEntry/ReasonPageActions';

class ReasonPage extends Component {
  static propTypes = {
    isError: PropTypes.bool,
    sendReason: PropTypes.func.isRequired,
    whoIs: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.whoIs(this.props.personId);
  }

  render() {
    const {
      sendReason,
      person,
      personId,
      getNextStep,
    } = this.props;

    return (
      <ReasonEntry
        person={person}
        sendReason={sendReason}
        personId={personId}
        getNextStep={getNextStep}
      />
    )
  }
}

function mapStateToProps(state) {
  const { reasonIsError } = selectors.reasonPage;

  return {
    isError: reasonIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {sendReason},
)(ReasonPage);
