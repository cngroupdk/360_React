import React from 'react';
import monthRender from '../common/monthRender'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';

export const TaskListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>Photo</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.name}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.department.name}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.position.name}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{monthRender(person.assessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={1}>Button</PersonColumn>
        </PersonRow>
);
