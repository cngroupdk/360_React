import React, { Component, PropTypes } from 'react';

import { ViewerListRow } from './ViewerListRow';
import { ViewerListEmpty } from './ViewerListEmpty';

import { ContentContainer } from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { ContentHeader } from '../common/assets/styles/ContentHeader';
import { NewViewerAssessmentBtnContainer } from '../common/assets/styles/ViewerPage/NewSelfAssessmentBtnContainer';

export default class ViewerList extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickCreate = this.handleOnClickCreate.bind(this);
    this.doesDraftExist = this.doesDraftExist.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  checkAssessmentsList() {
    const {viewerList} = this.props;

    if (viewerList.length > 0) {
      return viewerList.map((assessment) => {
        return <ViewerListRow assessment={assessment} key={assessment.Id}/>
      })
    } else {
      return <ViewerListEmpty/>
    }
  }

  doesDraftExist() {
    const {viewerList} = this.props;

    for (const assessment of viewerList) {
      if (assessment.ExistingDraft) {
        return true;
      }
    }
    return false;
  }

  handleOnClickCreate(event) {
    event.preventDefault();
    this.props.createViewerAssessment(this.context.router);
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

        <NewViewerAssessmentBtnContainer>
          <StyledLink
            disabled={this.doesDraftExist()}
            onClick={this.handleOnClickCreate}
            to="/viewer">
            New self assessment
          </StyledLink>
        </NewViewerAssessmentBtnContainer>
      </ContentContainer>
    );
  }
}
