import React, { Component } from 'react';

import { PeopleListPerson } from './PeopleListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader} from '../common/assets/styles/ContentHeader';
import { Input } from '../common/assets/styles/search';


export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this._searchOnePerson = this._searchOnePerson.bind(this);
    }

    _searchOnePerson() {
        const {
            searchPeople,
        } = this.props;

        searchPeople(document.getElementById('searchInput').value);
    }


    render() {
        const {
            people,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>People</ContentHeader>

                <Input type="text" id="searchInput" onChange={this._searchOnePerson}/>

                <HeaderRow>
                    <HeaderColumn fluid sm={2}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={1}>&nbsp;</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Assessment month</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Last submitted</HeaderColumn>
                    <HeaderColumn fluid sm={1}>&nbsp;</HeaderColumn>
                </HeaderRow>

                {people.map((person, index) => {
                    return (
                        <PeopleListPerson person={person} key={index}/>
                    )
                })}
            </ContentContainer>
        );
    }
}
