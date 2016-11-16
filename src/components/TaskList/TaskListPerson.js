import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import monthRender from '../common/monthRender'


const PersonRow = styled.div`
  background-color: gray;
  border-top: 1px solid black;
`;


export const TaskListPerson = ({person}) => (
    <PersonRow>
        <Row>
            <Column fluid sm={1}>Photo</Column>
            <Column fluid sm={2.5}>{person.name}</Column>
            <Column fluid sm={2.5}>{person.department.name}</Column>
            <Column fluid sm={2.5}>{person.position.name}</Column>
            <Column fluid sm={2.5}>{monthRender(person.assessmentMonth)}</Column>
            <Column fluid sm={1}>Button</Column>
        </Row>
    </PersonRow>
);
