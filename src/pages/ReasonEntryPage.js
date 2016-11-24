import React, { Component } from 'react';
import { Link } from 'react-router'

import { StyledButton } from '../components/common/assets/styles/StyledButton';

export default class ReasonEntryPage extends Component {
    render() {
        return (
            <div>
                ReasonEntryPage

                <StyledButton> <Link to="/level-entry">Enter level</Link></StyledButton>
            </div>
        )
    }
}
