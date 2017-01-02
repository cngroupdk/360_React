import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { selectors } from '../selectors';
import { loaderOptions } from '../appConfig'

import { fetchViewerList, createViewerAssessment } from '../components/ViewerList/ViewerPageActions';

import ViewerList from '../components/ViewerList/ViewerList';
import Tabs from '../components/common/Tabs';

class ViewerPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchViewerList: PropTypes.func.isRequired,
    createViewerAssessment: PropTypes.func.isRequired,
    viewerList: PropTypes.object,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchViewerList();
  }

  render() {
    const {
      isLoaded,
      viewerList,
      createViewerAssessment,
    } = this.props;

    return (
      <div>
        <Tabs/>
        <Loader loaded={isLoaded} options={loaderOptions}>
          <ViewerList viewerList={viewerList} createViewerAssessment={createViewerAssessment}/>
        </Loader>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { getViewerList, viewerListIsLoaded, viewerListIsError } = selectors.viewerPage;

  return {
    viewerList: getViewerList(state),
    isLoaded: viewerListIsLoaded(state),
    isError: viewerListIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchViewerList, createViewerAssessment}
)(ViewerPage);
