import React, { Component } from 'react';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { ContentHeader} from '../common/assets/styles/ContentHeader';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { StyledTextArea } from '../common/assets/styles/StyledTextArea';

export default class ReasonEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {reason: ''};
        this._handleReasonEnter = this._handleReasonEnter.bind(this);
    }

    _handleReasonEnter(e) {
        this.setState({
            reason: e.target.value
        });
        this.props.sendReason(e.target.value, this.props.assessmentId)
    }

    render() {

        const {
            nextStep,
            assessmentId,
        } = this.props;

        return (
            <ContentContainer>
                <ContentHeader>Warning! Person is not your co-worker.</ContentHeader>

                <StyledTextArea autoFocus
                                rows="4"
                                cols="50"
                                placeholder="Enter your reason here (min. 10 characters)..."
                                onChange={this._handleReasonEnter}></StyledTextArea>

                <StyledLink disabled={this.state.reason.length < 10}
                            to={{
                                pathname: '/' + nextStep.toLowerCase(),
                                query: {id: assessmentId}
                            }}>
                    Proceed further</StyledLink>
            </ContentContainer>


        )
    }
}