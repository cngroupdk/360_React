import React, { Component }  from 'react';

import TaskListPerson from './TaskListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader} from '../common/assets/styles/ContentHeader';
import { StyledInput } from '../common/assets/styles/StyledSearch';

export default class TaskList extends Component {

  constructor(props) {
    super(props);
    this.searchOnePerson = this.searchOnePerson.bind(this);
  }

  searchOnePerson(e) {
    const {
      searchTasks,
    } = this.props;

    searchTasks(e.target.value);
  }

  render() {
    const {
      taskPeople,
      getFirstStep,
    } = this.props;


    return (
      <ContentContainer>

        <ContentHeader>Tasks</ContentHeader>

        <StyledInput type="text" id="searchInputTask" onChange={this.searchOnePerson}/>

        <HeaderRow>
          <HeaderColumn fluid sm={4}>Person</HeaderColumn>
          <HeaderColumn fluid sm={1.5}>Department</HeaderColumn>
          <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
          <HeaderColumn fluid sm={1.5}>PR month</HeaderColumn>
          <HeaderColumn fluid sm={3}>&nbsp;</HeaderColumn>
        </HeaderRow>

        {taskPeople.map((person) => {
          return (
            <TaskListPerson person={person} key={person.get('Id')} getFirstStep={getFirstStep}/>
          )
        })}
      </ContentContainer>
    );
  }
}
