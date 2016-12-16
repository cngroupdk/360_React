import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
            <ReasonEntry
                person={person}
                sendReason={sendReason}
                nextStep={nextStep}
                persontId={this.props.location.query.id}
            />
        )
    }
}

function mapStateToProps(state) {
    const reasonPageReducerState = state.get('reasonPageReducer');

    return {
        person: reasonPageReducerState.get('person'),
        nextStep: reasonPageReducerState.get('nextStep'),
        isError: reasonPageReducerState.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {sendReason, whoIs},
)(ReasonPage);