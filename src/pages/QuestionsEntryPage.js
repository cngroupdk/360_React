import React, { Component } from 'react';
import { Link } from 'react-router'

import { StyledButton } from '../components/common/assets/styles/StyledButton';

export default class QuestionsEntryPage extends Component {
    render() {
        return (
            <div>

                <StyledButton> <Link to="/">Submit questions</Link></StyledButton>
            </div>
        )
    }
}
