import React from 'react';
import monthRender from '../common/monthRender'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';

export const TaskListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={3}>{person.Name}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.Position}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{monthRender(person.AssessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
        </PersonRow>
);
