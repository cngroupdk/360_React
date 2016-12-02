import React, { Component } from 'react';

import getPhotoUrl from '../common/getPhotoUrl';

import { StyledSelfCard } from '../common/assets/styles/Header/StyledSelfCard';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';


export default class SelfCard extends Component {
    render() {
        const {
            self,
        } = this.props;

        return (
            <StyledSelfCard>
                <StyledProfilePhoto imgUrl={getPhotoUrl(self.Login)}/>
                <div className="self-name">{self.Name}</div>
            </StyledSelfCard>
        );
    }
}
