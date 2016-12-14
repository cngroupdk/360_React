import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReasonEntry from '../components/ReasonEntry/ReasonEntry'
import { sendReason, whoIs } from '../components/ReasonEntry/actions';

class ReasonPage extends Component {
    componentDidMount() {
        this._fetchAllData();
    }

    _fetchAllData() {
        this.props.whoIs(this.props.location.query.id);
    }

    render() {
        const {
            sendReason,
            nextStep,
            person,
        } = this.props;

        return (
            <ReasonEntry person={person} sendReason={sendReason} nextStep={nextStep} assessmentId={this.props.location.query.id}/>
        )
    }
}

function mapStateToProps(state) {
    const nextStep = state.get('reasonEntry');

    return {
        person: nextStep.get('person'),
        nextStep: nextStep.get('nextStep'),
        isError: nextStep.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {sendReason, whoIs},
)(ReasonPage);