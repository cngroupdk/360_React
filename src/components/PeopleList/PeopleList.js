import React, { Component } from 'react';
import { Row, Column } from 'hedron';


import { PeopleListPerson } from './PeopleListPerson';

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
            <div>

                <input type="text" id="searchInput" onChange={this._searchOnePerson}/>

                <Row>
                    <Column fluid sm={1}>&nbsp;</Column>
                    <Column fluid sm={2}>Name</Column>
                    <Column fluid sm={2}>Department</Column>
                    <Column fluid sm={2}>Job category</Column>
                    <Column fluid sm={2}>Assessment month</Column>
                    <Column fluid sm={2}>Last submitted</Column>
                    <Column fluid sm={1}>&nbsp;</Column>
                </Row>

                {people.map((person, index) => {
                    return (
                        <PeopleListPerson person={person} key={index}/>
                    )
                })}
            </div>
        );
    }
}
