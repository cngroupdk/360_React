import React, { Component }  from 'react';

import { TaskListPerson } from './TaskListPerson';

export default class TaskList extends Component {
  render() {
    const {
        taskPeople,
    } = this.props;

    return (
        <div>
          {taskPeople.map((person, index) => {
            return (
                <TaskListPerson person={person} key={index}/>
            )
          })}
        </div>
    );
  }
}
