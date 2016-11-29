import React, { Component } from 'react';
import { Link } from 'react-router'

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';
import { StyledTextArea } from '../components/common/assets/styles/StyledTextArea'

export default class ReasonEntryPage extends Component {
    render() {
        return (
            <ContentContainer>
                <ContentHeader>Warning! Person is not your co-worker.</ContentHeader>

                <StyledTextArea autoFocus rows="4" cols="50" placeholder="Enter your reason here..."></StyledTextArea>

                <StyledButton> <Link to="/level-entry">Send</Link></StyledButton>
            </ContentContainer>
        )
    }
}
