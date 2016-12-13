import React, { Component } from 'react';

import { apiPost } from '../api';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { StyledTextArea } from '../components/common/assets/styles/StyledTextArea';

export default class ReasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {reason: ''};
        this._handleReasonEnter = this._handleReasonEnter.bind(this);
    }

    _handleReasonEnter(e) {
        this.setState({
            reason: e.target.value
        });

        apiPost.post('/assessments/reason', {
            reason: e.target.value,
            id: this.props.location.query.id
        });
    }

    render() {
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
                                    pathname: "/level",
                                    query: {id: this.props.location.query.id}
                                }}>
                        Proceed further</StyledLink>
            </ContentContainer>
        )
    }
}
