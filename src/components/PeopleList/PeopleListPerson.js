import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';
import FontAwesome from 'react-fa';
import dateFormat from 'dateformat';

import getPhotoUrl from '../../lib/getPhotoUrl';
import RedirectButton from '../common/RedirectButton';

import { CenteredContent } from '../common/assets/styles/CenteredContent';
import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { IconWrapper } from '../common/assets/styles/PeoplePage/IconWrapper';

export default class PeopleListPerson extends Component {
  render() {
    const {
      person,
      getFirstStep,
    } = this.props;
    const assessmentMonth = person.get('AssessmentMonth');
    const lastSubmitted = person.get('LastSubmitted');
    const EvaluationComingSoon = person.get('EvaluationComingSoon')

    return (
      <TableRow>
        <TableCell fluid sm={0.8}>
          <CenteredContent>
            <StyledProfileInitial>
              <LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.get('Login'))}/></LazyLoad>
            </StyledProfileInitial>
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={0.4}>
          <CenteredContent>
            <IconWrapper size={1.4}>
              <FontAwesome
                title='Your colleague'
                name={person.get('Colleague') ? 'user-o' : ''}
              />
            </IconWrapper>
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={2.5}>
          <CenteredContent>
            {person.get('Name')}
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.4}>
          <CenteredContent>{person.get('Department')}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}>
          <CenteredContent>{person.get('Position')}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}>
          <CenteredContent>
            {assessmentMonth ? dateFormat(assessmentMonth + ' 1 2012', 'mmmm') : 'None listed'}
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.6}>
          <CenteredContent>
            {lastSubmitted ? dateFormat(lastSubmitted, "dd mmmm yyyy") : 'None listed'}
          </CenteredContent>
        </TableCell>
        <TableCell fluid sm={2}>
          <RedirectButton
            className="tableRowShowOnHover"
            person={person}
            getFirstStep={getFirstStep}/>
        </TableCell>
        <TableCell fluid sm={0.3}>
          <CenteredContent>
            <IconWrapper size={1.4}>
              <FontAwesome
                title="Assessment in one month"
                name={EvaluationComingSoon ? 'clock-o' : ''}
              />
            </IconWrapper>
          </CenteredContent>
        </TableCell>
      </TableRow>
    );
  }
}
