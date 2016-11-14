import React, { Component } from 'react';

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

          {people.map((person, index) => {
            return (
                <PeopleListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
