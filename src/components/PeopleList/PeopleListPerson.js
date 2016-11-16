import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import monthRender from '../common/monthRender'


const PersonRow = styled.div`
  background-color: gray;
  border-top: 1px solid black;
`;

export const PeopleListPerson = ({person}) => (
    <PersonRow>
        <Row>
            <Column fluid sm={1}>Photo</Column>
            <Column fluid sm={2}>{person.name}</Column>
            <Column fluid sm={2}>{person.department.name}</Column>
            <Column fluid sm={2}>{person.position.name}</Column>
            <Column fluid sm={2}>{monthRender(person.assessmentMonth)}</Column>
            <Column fluid sm={2}>&nbsp;</Column>
            <Column fluid sm={1}>Button</Column>
        </Row>
    </PersonRow>
);
