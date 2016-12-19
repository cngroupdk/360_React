import React, { Component, PropTypes } from 'react';

import { SelfListRow } from './SelfListRow';
import { SelfListEmpty } from './SelfListEmpty';

import { ContentContainer } from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { NewSelfAssessmentBtnContainer } from '../common/assets/styles/SelfPage/NewSelfAssessmentBtnContainer';

export default class SelfList extends Component {
  constructor(props) {
    super(props);
    this._handleOnClickCreate = this._handleOnClickCreate.bind(this);
    this._isDraftExists = this._isDraftExists.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  checkAssessmentsList() {
    const {selfList} = this.props;

    if (selfList.length > 0) {
      return selfList.map((assessment) => {
        return <SelfListRow assessment={assessment} key={assessment.Id}/>
      })
    } else {
      return <SelfListEmpty/>
    }
  }

  _isDraftExists() {
    const {selfList} = this.props;

    for (const assessment of selfList) {
      if (assessment.ExistingDraft) {
        return true;
      }
    }
    return false;
  }

  _handleOnClickCreate(event) {
    event.preventDefault();
    this.props.createSelfAssessment(this.context.router);
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
          <StyledLink
            disabled={this._isDraftExists()}
            onClick={this._handleOnClickCreate}
            to="/self">
            New self assessment
          </StyledLink>
        </NewSelfAssessmentBtnContainer>
      </ContentContainer>
    );
  }
}
