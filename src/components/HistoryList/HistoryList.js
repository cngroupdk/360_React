import React, { Component }  from 'react';

import { HistoryListPerson } from './HistoryListPerson';

export default class HistoryList extends Component {
  render() {
    const {
        historyPeople,
    } = this.props;

    return (
        <div>
          {historyPeople.map((person, index) => {
            return (
                <HistoryListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
