import React, { Component }  from 'react';

import { TaskListPerson } from './TaskListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader} from '../common/assets/styles/ContentHeader';

export default class TaskList extends Component {
    render() {
        const {
            taskPeople,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>Tasks</ContentHeader>

                <HeaderRow>
                    <HeaderColumn fluid sm={2}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>&nbsp;</HeaderColumn>
                    <HeaderColumn fluid sm={2.5}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2.5}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={2.5}>Assessment month</HeaderColumn>
                    <HeaderColumn fluid sm={1}>&nbsp;</HeaderColumn>
                </HeaderRow>

                {taskPeople.map((person, index) => {
                    return (
                        <TaskListPerson person={person} key={index}/>
                    )
                })}
            </ContentContainer>
        );
    }
}
