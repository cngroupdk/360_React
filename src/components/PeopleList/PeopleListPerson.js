import React from 'react';
import { Link } from 'react-router'
import monthRender from '../common/monthRender'
import getPhotoUrl from '../common/getPhotoUrl'
import buttonType from '../common/buttonType'

import {PersonRow, PersonColumn} from '../common/assets/styles/PersonRow';
import {StyledButton} from '../common/assets/styles/StyledButton';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';

export const PeopleListPerson = ({person}) => (
  <PersonRow>
    <PersonColumn fluid sm={1}>
      <div className='absolute'><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></div>
    </PersonColumn>
    <PersonColumn fluid sm={2.5}>
      <div className='absolute'>{person.Name}</div>
    </PersonColumn>
    <PersonColumn fluid sm={1.5}>
      <div className='absolute'>{person.Department}</div>
    </PersonColumn>
    <PersonColumn fluid sm={2}>
      <div className='absolute'>{person.Position}</div>
    </PersonColumn>
    <PersonColumn fluid sm={2}>
      <div className='absolute'>{monthRender(person.AssessmentMonth)}</div>
    </PersonColumn>
    <PersonColumn fluid sm={3}>
      <div className='absolute'>
        <StyledButton>
          <Link to="/reason-entry">{buttonType(person.ExistingDraft)}</Link>
        </StyledButton>
      </div>
    </PersonColumn>
  </PersonRow>
);
