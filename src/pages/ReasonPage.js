import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reasonSave } from '../components/ReasonEntry/actions';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { StyledTextArea } from '../components/common/assets/styles/StyledTextArea';

class ReasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {reason: ''};
        this._handleReasonEnter = this._handleReasonEnter.bind(this);
    }

    _handleReasonEnter(e) {
        this.setState({
            reason: e.target.value
        });

        this.props.reasonSave(e.target.value)
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader>Warning! {this.props.location.query.name} is not your co-worker.</ContentHeader>

                <StyledTextArea autoFocus
                                rows="4"
                                cols="50"
                                placeholder="Enter your reason here (min. 10 characters)..."
                                onChange={this._handleReasonEnter}></StyledTextArea>

                    <StyledLink disabled={this.state.reason.length < 10}
                                to="/level-entry">
                        Proceed further</StyledLink>
            </ContentContainer>
        )
    }
}


function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(
    mapStateToProps,
    {reasonSave},
)(ReasonPage);
