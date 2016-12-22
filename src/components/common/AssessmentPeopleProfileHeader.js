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
          <ProfilePhoto radius='120px' imgUrl={getPhotoUrl(person.get('Login'))}/>
        </ProfilePhotoWrapper>
        <ProfileDescriptionWrapper>
          <h2>{person.get('Name')}</h2>
          Position: {person.get('Position')}<br/>
          Department: {person.get('Department')}
        </ProfileDescriptionWrapper>
        {children}
      </PeopleProfileHeader>
    )
  }
}
