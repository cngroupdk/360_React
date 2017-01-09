import React, { Component } from 'react';

import Level from './Level'

import { ContentContainer } from '../../components/common/assets/styles/ContentContainer';

export default class AdminList extends Component {
  render() {
    const {
      adminList
    } = this.props;

    return (
      <ContentContainer>
        {adminList.map((level) => (
          <Level level={level} key={level.get('Id')}/>
        ))}
      </ContentContainer>
    );
  }
}
