import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import { selectors } from '../selectors';
import { loaderOptions } from '../appConfig'

import {
  fetchAdminList
} from '../components/AdminList/AdminPageActions';

class ReasonLevelAssessmentPage extends Component {
  componentWillMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchAdminList()
  }

  render() {
    const {
      adminListIsLoaded,
    } = this.props;

    return (
      <Loader loaded={adminListIsLoaded} options={loaderOptions}>
        <div>1</div>
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const {
    getAdminList,
    adminListIsLoaded,
  } = selectors.adminPage;

  return {
    adminList: getAdminList(state),
    adminListIsLoaded: adminListIsLoaded(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchAdminList},
)(ReasonLevelAssessmentPage);
