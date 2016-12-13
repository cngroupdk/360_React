import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectButton from '../common/RedirectButton';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class HistoryListPerson extends Component {
    render() {
        const {
            person,
            getFirstStep,
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
                    <RedirectButton
                        person={person}
                        getFirstStep={getFirstStep}/></TableCell>
            </TableRow>
        );
    }
}