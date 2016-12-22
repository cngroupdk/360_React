import React, { Component } from 'react';

import getPhotoUrl from '../../lib/getPhotoUrl';

import { StyledViewerCard } from '../common/assets/styles/Header/StyledViewerCard';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';

export default class ViewerCard extends Component {
  render() {
    const {
      viewer,
    } = this.props;

    return (
      <StyledViewerCard>
        <StyledProfilePhoto imgUrl={getPhotoUrl(viewer.get('Login'))}/>
        <div className="self-name">{viewer.get('Name')}</div>
      </StyledViewerCard>
    );
  }
}
