import React from 'react';
import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';

import {PersonRow, PersonColumn} from '../common/assets/styles/PersonRow';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';

export const TaskListPerson = ({person}) => (
  <div>
    <PersonRow>
      <PersonColumn fluid sm={1}>
        <div className='absolute'>
          <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
        </div>
      </PersonColumn>
      <PersonColumn fluid sm={3}><div className='absolute'>{person.Name}</div>
      </PersonColumn>
      <PersonColumn fluid sm={2}><div className='absolute'>{person.Department}</div>
      </PersonColumn>
      <PersonColumn fluid sm={2.5}><div className='absolute'>{person.Position}</div>
      </PersonColumn>
      <PersonColumn fluid sm={2.5}><div className='absolute'>{monthRender(person.AssessmentMonth)}</div>
      </PersonColumn>
      <PersonColumn fluid sm={1}><div className='absolute'>&nbsp;</div>
      </PersonColumn>
    </PersonRow>
  </div>
);
