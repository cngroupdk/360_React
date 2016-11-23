import React, {Component} from 'react';

import {SelfListRow} from './SelfListRow';
import {SelfListEmpty} from './SelfListEmpty';

import {ContentContainer} from '../common/assets/styles/ContentContainer';
import {HeaderRow, HeaderColumn} from '../common/assets/styles/HeaderRow';
import {ContentHeader} from '../common/assets/styles/ContentHeader';

export default class SelfList extends Component {

  checkAssessmentsList() {
    const {selfList} = this.props;

    if (selfList.length > 0) {
      return selfList.map((person, index) => {
        return <SelfListRow person={person} key={index}/>
      })
    } else {
      return <SelfListEmpty/>
    }
  }

  render() {

    return (
      <ContentContainer>

        <ContentHeader>Self Assessment</ContentHeader>

        <HeaderRow>
          <HeaderColumn fluid sm={4}>Person</HeaderColumn>
          <HeaderColumn fluid sm={2}>Department</HeaderColumn>
          <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
          <HeaderColumn fluid sm={2}>Last submitted</HeaderColumn>
          <HeaderColumn fluid sm={2}>&nbsp;</HeaderColumn>
        </HeaderRow>

        {this.checkAssessmentsList()}

      </ContentContainer>
    );
  }
}
