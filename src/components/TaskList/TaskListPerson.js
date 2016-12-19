import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';
import dateFormat from 'dateformat';

import getPhotoUrl from '../../lib/getPhotoUrl';
import RedirectButton from '../common/RedirectButton';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class TaskListPerson extends Component {
  render() {
    const {
      person,
      getFirstStep,
    } = this.props;
    const assessmentMonth = person.AssessmentMonth;

    return (
      <TableRow>
        <TableCell fluid sm={1}>
          <CenteredContent>
            <StyledProfileInitial>
              <LazyLoad height={50}>
                <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
              </LazyLoad>
            </StyledProfileInitial>
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.Name}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}><CenteredContent>{person.Department}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={2}><CenteredContent>{person.Position}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}>
          <CenteredContent>
            {assessmentMonth ? dateFormat(assessmentMonth + ' 1 2012', 'mmmm') : 'None listed'}
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}>
          <RedirectButton
            person={person}
            getFirstStep={getFirstStep}/>
        </TableCell>
      </TableRow>
    );
  }
}
