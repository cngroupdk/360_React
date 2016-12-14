import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';
import dateFormat from 'dateformat';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectButtonHistory from './HistoryListPersonRedirect';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class HistoryListPerson extends Component {

    _CheckIfDraft(person) {
        if (person.ExistingDraft !== '') {
            return <RedirectButtonHistory person={person}/>
        } else{
            return  <CenteredContent>
                {dateFormat(person.LastSubmitted, "dd mmmm yyyy")}
                    </CenteredContent>
        }
    }

    render() {
        const {
            person
        } = this.props;

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
                <TableCell fluid sm={2.5}><CenteredContent>{person.Name}</CenteredContent></TableCell>
                <TableCell fluid sm={1.5}><CenteredContent>{person.Department}</CenteredContent></TableCell>
                <TableCell fluid sm={2}><CenteredContent>{person.Position}</CenteredContent></TableCell>
                <TableCell fluid sm={2}><CenteredContent>{monthRender(person.AssessmentMonth)}</CenteredContent></TableCell>
                <TableCell fluid sm={3}>
                    {this._CheckIfDraft(person)}</TableCell>
            </TableRow>
        );
    }
}