import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReasonEntry from '../components/ReasonEntry/ReasonEntry'
import { sendReason } from '../components/ReasonEntry/actions';

class ReasonPage extends Component {

    render() {
        const {
            sendReason,
            nextStep,
        } = this.props;

        return (
            <ReasonEntry sendReason={sendReason} nextStep={nextStep} assessmentId={this.props.location.query.id}/>
        )
    }
}

function mapStateToProps(state) {
    const nextStep = state.get('reasonEntry');

    return {
        nextStep: nextStep.get('nextStep'),
        isError: nextStep.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {sendReason},
)(ReasonPage);