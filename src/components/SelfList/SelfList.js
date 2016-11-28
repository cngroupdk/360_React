import React, { Component } from 'react';
import { Link } from 'react-router';

import { SelfListRow } from './SelfListRow';
import { SelfListEmpty } from './SelfListEmpty';

import { ContentContainer } from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { NewSelfAssessmentBtnContainer } from '../common/assets/styles/SelfList/NewSelfAssessmentBtnContainer';

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
                  <HeaderColumn fluid sm={3}>Person</HeaderColumn>
                  <HeaderColumn fluid sm={3}>Department</HeaderColumn>
                  <HeaderColumn fluid sm={3}>Job category</HeaderColumn>
                  <HeaderColumn fluid sm={3}>Last submitted</HeaderColumn>
              </HeaderRow>

              {this.checkAssessmentsList()}

              <NewSelfAssessmentBtnContainer>
                  <StyledButton><Link to="/level-entry">New self assessment</Link></StyledButton>
              </NewSelfAssessmentBtnContainer>
          </ContentContainer>
      );
  }
}
