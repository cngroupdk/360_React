import React, { Component }  from 'react';
import { Row, Column } from 'hedron';

import { TaskListPerson } from './TaskListPerson';

export default class TaskList extends Component {
  render() {
    const {
        taskPeople,
    } = this.props;

    return (
        <div>

          <Row>
            <Column fluid sm={1}>&nbsp;</Column>
            <Column fluid sm={2.5}>Name</Column>
            <Column fluid sm={2.5}>Department</Column>
            <Column fluid sm={2.5}>Job category</Column>
            <Column fluid sm={2.5}>Assessment month</Column>
            <Column fluid sm={1}>&nbsp;</Column>
          </Row>

          {taskPeople.map((person, index) => {
            return (
                <TaskListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
