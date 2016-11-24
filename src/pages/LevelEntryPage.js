import React, { Component } from 'react';
import { Link } from 'react-router'

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';

export default class LevelEntryPage extends Component {
    render() {
        return (
            <div>
                <ContentContainer>
                    <ContentHeader> LevelEntryPage </ContentHeader>

                    <StyledButton> <Link to="/questions-entry">Proceed to questions</Link></StyledButton>

                </ContentContainer>
            </div>
        )
    }
}
