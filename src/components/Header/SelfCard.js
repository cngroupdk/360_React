import React, { Component } from 'react';

import { StyledSelfCard } from '../common/assets/styles/Header/StyledSelfCard';


export default class SelfCard extends Component {
    render() {

        const {
            self,
        } = this.props;

        return (
                <StyledSelfCard>
                    <div className="self-photo">&nbsp;</div>
                    <div className="self-name">{self.Name}</div>
                </StyledSelfCard>
        );
    }
}
