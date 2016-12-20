import React, { Component } from 'react';

import getPhotoUrl from '../../lib/getPhotoUrl';

import { ProfilePhoto } from './assets/styles/StyledProfilePhoto';
import {
  PeopleProfileHeader,
  ProfileDescriptionWrapper,
  ProfilePhotoWrapper
} from './assets/styles/QuestionsPage/PeopleProfileHeader';

export class AssessmentPeopleProfileHeader extends Component {

  render () {
    const {
      children,
      person,
    } = this.props;

    return (
      <PeopleProfileHeader>
        <ProfilePhotoWrapper>
          <ProfilePhoto radius='120px' imgUrl={getPhotoUrl(person.Login)}/>
        </ProfilePhotoWrapper>
        <ProfileDescriptionWrapper>
          <h2>{person.Name}</h2>
          Position: {person.Position}<br/>
          Department: {person.Department}
        </ProfileDescriptionWrapper>
        {children}
      </PeopleProfileHeader>
    )
  }
}
