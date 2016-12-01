import React, { Component } from 'react';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { StyledTextArea } from '../components/common/assets/styles/StyledTextArea';

export default class ReasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {reason: '', personName: props.location.query.name};
        this.handleReasonEnter = this.handleReasonEnter.bind(this);
    }

    handleReasonEnter(e) {
        this.setState({
            reason: e.target.value
        });
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader>Warning! {this.state.personName} is not your co-worker.</ContentHeader>

                <StyledTextArea autoFocus
                                rows="4"
                                cols="50"
                                placeholder="Enter your reason here (min. 10 characters)..."
                                onChange={this.handleReasonEnter}></StyledTextArea>

                    <StyledLink disabled={this.state.reason.length < 10 ? true : false}
                                to="/level-entry">
                        Proceed further</StyledLink>
            </ContentContainer>
        )
    }
}
