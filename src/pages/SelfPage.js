import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { fetchSelfList, createSelfAssessment } from '../components/SelfList/SelfPageActions';

import SelfList from '../components/SelfList/SelfList';
import Tabs from '../components/common/Tabs';

class SelfPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchSelfList: PropTypes.func.isRequired,
    createSelfAssessment: PropTypes.func.isRequired,
    selfList: PropTypes.array,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchSelfList();
  }

  render() {
    const {
      isLoaded,
      selfList,
      createSelfAssessment,
    } = this.props;

    return (
      <div>
        <Tabs/>
        <Loader loaded={isLoaded}>
          <SelfList selfList={selfList} createSelfAssessment={createSelfAssessment}/>
        </Loader>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const selfPageReducerState = state.get('selfPageReducer');

  return {
    selfList: selfPageReducerState.get('selfList'),
    isLoaded: selfPageReducerState.get('isLoaded'),
    isError: selfPageReducerState.get('isError'),
  };
}

export default connect(
  mapStateToProps,
  {fetchSelfList, createSelfAssessment}
)(SelfPage);
