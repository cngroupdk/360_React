import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectButton from '../common/RedirectButton';

import { CenteredContent } from '../common/assets/styles/CenteredContent';
import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';

export default class PeopleListPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {isButtonHidden: true};
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        this.setState(() => ({
            isButtonHidden: false
        }));
    }

    onMouseLeaveHandler() {
        this.setState(() => ({
            isButtonHidden: true
        }));
    }

    render() {
        const {
            person,
            getFirstStep,
        } = this.props;

        return (
            <TableRow onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                <TableCell fluid sm={1}>
                    <CenteredContent>
                        <StyledProfileInitial>
                            <LazyLoad height={50} ><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad>
                        </StyledProfileInitial>
                    </CenteredContent>
                </TableCell>
                <TableCell fluid sm={2.5}>
                    <CenteredContent>{person.Name}</CenteredContent>
                </TableCell>
                <TableCell fluid sm={1.5}>
                    <CenteredContent>{person.Department}</CenteredContent>
                </TableCell>
                <TableCell fluid sm={2}>
                    <CenteredContent>{person.Position}</CenteredContent>
                </TableCell>
                <TableCell fluid sm={1.5}>
                    <CenteredContent>{monthRender(person.AssessmentMonth)}</CenteredContent>
                </TableCell>
                <TableCell fluid sm={1.5}>
                    <CenteredContent>None listed</CenteredContent>
                </TableCell>
                <TableCell fluid sm={2}>
                    <RedirectButton
                        isHidden={this.state.isButtonHidden}
                        person={person}
                        getFirstStep={getFirstStep}/>
                </TableCell>
            </TableRow>
        );
    }
}
