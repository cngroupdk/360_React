import React, { Component } from 'react';

import PeopleListPerson from './PeopleListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { StyledInput } from '../common/assets/styles/StyledSearch';


export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this._searchOnePerson = this._searchOnePerson.bind(this);
    }

    _searchOnePerson(e) {
        this.props.searchPeople(e.target.value);
    }

    render() {
        const {
            people,
            getFirstStep,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>People</ContentHeader>

                <StyledInput type="text" id="searchInput" onChange={this._searchOnePerson}/>

                <HeaderRow>
                    <HeaderColumn fluid sm={3.5}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>PR month</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>Last submitted</HeaderColumn>
                    <HeaderColumn fluid sm={2}>&nbsp;</HeaderColumn>
                </HeaderRow>

                {people.map((person, index) => {
                    return (
                        <PeopleListPerson person={person}
                                          key={index}
                                          getFirstStep={getFirstStep}
                        />
                    )
                })}
            </ContentContainer>
        );
    }
}
