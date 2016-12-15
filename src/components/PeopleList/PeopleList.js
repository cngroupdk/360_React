import React, { Component } from 'react';
import FontAwesome from 'react-fa';

import PeopleListPerson from './PeopleListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { StyledInput } from '../common/assets/styles/StyledSearch';
import { IconWrapper } from '../common/assets/styles/IconWrapper';
import { Legend } from '../common/assets/styles/Legend';

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this._searchOnePerson = this._searchOnePerson.bind(this);
    }

    _searchOnePerson(e) {
        const {
            searchPeople,
        } = this.props;

        searchPeople(e.target.value);
    }

    render() {
        const {
            people,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>People</ContentHeader>
                <Legend>
                    <IconWrapper size={0.9}>
                        <FontAwesome
                            title='Your colleague'
                            name='user-o'
                        />
                        Your colleague
                        <FontAwesome
                            title='Assessment in one month'
                            name='clock-o'
                        />Assessment in one month
                    </IconWrapper>
                </Legend>
                <StyledInput type="text" id="searchInput" onChange={this._searchOnePerson}/>

                <HeaderRow>
                    <HeaderColumn fluid sm={3.7}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={1.4}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>PR month</HeaderColumn>
                    <HeaderColumn fluid sm={1.1}>Last submitted</HeaderColumn>
                    <HeaderColumn fluid sm={2}>&nbsp;</HeaderColumn>
                    <HeaderColumn fluid sm={0.3}>&nbsp;</HeaderColumn>
                </HeaderRow>

                {people.map((person, index) => {
                    return (
                        <PeopleListPerson person={person}
                                          key={index}
                        />
                    )
                })}
            </ContentContainer>
        );
    }
}