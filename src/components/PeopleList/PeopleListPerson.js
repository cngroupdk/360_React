import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectIfColleague from './RedirectIfColleague';


import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class PeopleListPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {isButtonHidden: true};
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        const {
            person,
            checkIfColleague,
        } = this.props;

        this.setState(() => ({
            isButtonHidden: false
        }));

        checkIfColleague(person.Login)

    }

    onMouseLeaveHandler() {
        this.setState(() => ({
            isButtonHidden: true
        }));
    }

    render() {
        const {
            person,
            isColleague
        } = this.props;

        return (
            <TableRow onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                <TableCell fluid sm={1}>
                    <CenteredContent><LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad></CenteredContent>
                </TableCell>
                <TableCell fluid sm={2}>
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
                <TableCell fluid sm={2}>
                    <CenteredContent>None listed</CenteredContent>
                </TableCell>
                <TableCell fluid sm={2}>
                    <RedirectIfColleague
                        isHidden={this.state.isButtonHidden}
                        isColleague={isColleague}
                        person={person}/>
                </TableCell>
            </TableRow>
        );
    }
}
