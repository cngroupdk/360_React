import React, { Component } from 'react';

import getPhotoUrl from '../../lib/getPhotoUrl';

import { StyledSelfCard } from '../common/assets/styles/Header/StyledSelfCard';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';

export default class SelfCard extends Component {
  render() {
    const {
      viewer,
    } = this.props;

    return (
      <StyledSelfCard>
        <StyledProfilePhoto imgUrl={getPhotoUrl(viewer.Login)}/>
        <div className="self-name">{viewer.Name}</div>
      </StyledSelfCard>
    );
  }
}
