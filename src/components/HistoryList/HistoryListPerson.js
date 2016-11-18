import React from 'react';
import monthRender from '../common/monthRender'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';


export const HistoryListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>Photo</PersonColumn>
            <PersonColumn fluid sm={2}>{person.name}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.department.name}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.position.name}</PersonColumn>
            <PersonColumn fluid sm={2}>{monthRender(person.assessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={1}>Button</PersonColumn>
        </PersonRow>
);
