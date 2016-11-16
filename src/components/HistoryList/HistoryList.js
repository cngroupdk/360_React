import React, { Component }  from 'react';
import { Row, Column } from 'hedron';

import { HistoryListPerson } from './HistoryListPerson';

export default class HistoryList extends Component {
  render() {
    const {
        historyPeople,
    } = this.props;

    return (
        <div>

          <Row>
            <Column fluid sm={1}>&nbsp;</Column>
            <Column fluid sm={2}>Name</Column>
            <Column fluid sm={2}>Department</Column>
            <Column fluid sm={2}>Job category</Column>
            <Column fluid sm={2}>Assessment month</Column>
            <Column fluid sm={2}>Last submitted</Column>
            <Column fluid sm={1}>&nbsp;</Column>
          </Row>

          {historyPeople.map((person, index) => {
            return (
                <HistoryListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
