import React, { Component }  from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import getIsColleagueIcon from '../common/getIsColleagueIcon';
import getAssMonthIcon from '../common/getAssMonthIcon';
import RedirectIfColleague from './RedirectIfColleague';


import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { CenteredContent } from '../common/assets/styles/CenteredContent';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { StyledIcon } from '../common/assets/styles/StyledIcon';



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
                <TableCell fluid sm={1}>
                    <CenteredContent>None listed</CenteredContent>
                </TableCell>
                <TableCell fluid sm={2}>
                    <RedirectIfColleague
                        isHidden={this.state.isButtonHidden}
                        person={person}/>
                </TableCell>
                <TableCell fluid sm={0.5}>
                    <CenteredContent>
                        <StyledIcon type={getIsColleagueIcon(person.Colleague)}/>
                        <StyledIcon type={getAssMonthIcon(person.AssessmentMonth)}/>
                    </CenteredContent>
                </TableCell>
            </TableRow>
        );
    }
}
