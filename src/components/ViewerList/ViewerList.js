import React, { Component, PropTypes } from 'react';

import  ViewerListRow  from './ViewerListRow';
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
  }

  static contextTypes = {
    router: PropTypes.object
  };

  isDraftExists() {
    const firstAssessment = this.props.viewerList.get(0);
    return firstAssessment && firstAssessment.get('ExistingDraft')
  }

  checkAssessmentsList() {
    const {viewerList} = this.props;

    if (viewerList.size > 0) {
      return viewerList.map((assessment) => {
        return <ViewerListRow assessment={assessment} key={assessment.get('Id')}/>
      })
    }
    return <ViewerListEmpty/>
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
            disabled={this.isDraftExists()}
            onClick={this.handleOnClickCreate}
            to="/viewer">
            New self assessment
          </StyledLink>
        </NewViewerAssessmentBtnContainer>
      </ContentContainer>
    );
  }
}
