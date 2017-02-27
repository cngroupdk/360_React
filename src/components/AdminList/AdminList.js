import React, { Component } from 'react';

import Level from './Level';

import { AdminContentContainer } from '../../components/common/assets/styles/Admin/AdminContainer';

export default class AdminList extends Component {
  render() {
    const {
      adminList
    } = this.props;

    return (
      <AdminContentContainer>
        {adminList.map((level) => (
          <Level level={level} key={level.get('Id')}/>
        ))}
      </AdminContentContainer>
    );
  }
}
