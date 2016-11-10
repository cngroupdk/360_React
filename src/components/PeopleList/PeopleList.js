import React, { Component }  from 'react';

import { PeopleListPerson } from './PeopleListPerson';

export default class PeopleList extends Component {
  render() {
    const {
        people,
    } = this.props;

    return (
        <div>
          {people.map((person, index) => {
            return (
                <PeopleListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
