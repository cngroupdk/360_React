import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';
import dateFormat from 'dateformat';

import getPhotoUrl from '../../lib/getPhotoUrl';
import RedirectButtonHistory from './HistoryListPersonRedirect';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class HistoryListPerson extends Component {

  CheckIfDraft(person) {
    if (person.get('ExistingDraft')) {
      return <RedirectButtonHistory person={person}/>
    } else {
      return (
        <CenteredContent>
          {person.get('LastSubmitted') ? dateFormat(person.LastSubmitted, "dd mmmm yyyy") : ''}
        </CenteredContent>
      )
    }
  }

  render() {
    const {
      person
    } = this.props;
    const assessmentMonth = person.get('AssessmentMonth');

    return (
      <TableRow>
        <TableCell fluid sm={1}>
          <CenteredContent>
            <StyledProfileInitial>
              <LazyLoad height={50}>
                <StyledProfilePhoto imgUrl={getPhotoUrl(person.get('Login'))}/>
              </LazyLoad>
            </StyledProfileInitial>
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={2.5}><CenteredContent>{person.get('Name')}</CenteredContent></TableCell>
        <TableCell fluid sm={1.5}><CenteredContent>{person.get('Department')}</CenteredContent></TableCell>
        <TableCell fluid sm={2}><CenteredContent>{person.get('Position')}</CenteredContent></TableCell>
        <TableCell fluid sm={2}>
          <CenteredContent>
            {assessmentMonth ? dateFormat(assessmentMonth + ' 1 2012', 'mmmm') : 'None listed'}
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}>
          {this.CheckIfDraft(person)}
        </TableCell>
      </TableRow>
    );
  }
}
