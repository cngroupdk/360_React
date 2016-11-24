import React, { Component } from 'react';
import { Link } from 'react-router'

import { StyledButton } from '../components/common/assets/styles/StyledButton';

export default class LevelEntryPage extends Component {
    render() {
        return (
            <div>
                LevelEntryPage

                <StyledButton> <Link to="/questions-entry">Proceed to questions</Link></StyledButton>
            </div>
        )
    }
}
