import React, { Component } from 'react';
import FontAwesome from 'react-fa';

import PeopleListPerson from './PeopleListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { StyledInput } from '../common/assets/styles/StyledSearch';
import { IconWrapper } from '../common/assets/styles/PeoplePage/IconWrapper';
import { Legend } from '../common/assets/styles/PeoplePage/Legend';

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.searchOnePerson = this.searchOnePerson.bind(this);
  }

  searchOnePerson(e) {
    this.props.searchPeople(e.target.value);
  }

  render() {
    const {
      people,
      getFirstStep,
    } = this.props;

    return (
      <ContentContainer>

        <ContentHeader>People</ContentHeader>
        <Legend>
          <IconWrapper size={0.9}>
            <FontAwesome
              title='Your colleague'
              name='user-o'
            />
            Your colleague
            <FontAwesome
              title='Assessment in one month'
              name='clock-o'
            />Assessment in one month
          </IconWrapper>
        </Legend>
        <StyledInput type="text" id="searchInput" onChange={this.searchOnePerson}/>

        <HeaderRow>
          <HeaderColumn fluid sm={3.7}>Person</HeaderColumn>
          <HeaderColumn fluid sm={1.4}>Department</HeaderColumn>
          <HeaderColumn fluid sm={1.5}>Job category</HeaderColumn>
          <HeaderColumn fluid sm={1.5}>PR month</HeaderColumn>
          <HeaderColumn fluid sm={1.6}>Last submitted</HeaderColumn>
          <HeaderColumn fluid sm={2}>&nbsp;</HeaderColumn>
          <HeaderColumn fluid sm={0.3}>&nbsp;</HeaderColumn>
        </HeaderRow>

        {people.map((person) => {
          return (
            <PeopleListPerson person={person}
                              key={person.get('Id')}
                              getFirstStep={getFirstStep}
            />
          )
        })}
      </ContentContainer>
    );
  }
}
