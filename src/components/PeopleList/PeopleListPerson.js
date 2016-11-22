import React from 'react';
import monthRender from '../common/monthRender'
import buttonType from '../common/buttonType'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';


export const PeopleListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.Name}</PersonColumn>
            <PersonColumn fluid sm={1.5}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Position}</PersonColumn>
            <PersonColumn fluid sm={2}>{monthRender(person.AssessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={1}><button>{buttonType(person.ExistingDraft)}</button></PersonColumn>
        </PersonRow>
);
