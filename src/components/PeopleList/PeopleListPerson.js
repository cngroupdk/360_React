import React from 'react';
import styled from 'styled-components';


const PersonRow = styled.div`
  background-color: gray;
  border-top: 1px solid black;
`;


export const PeopleListPerson = ({person}) => (
    <PersonRow>
      {person.name}
    </PersonRow>
);
