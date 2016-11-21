import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { fetchSelfList } from '../components/SelfList/actions';
import SelfList from '../components/SelfList/SelfList';

class SelfPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchSelfList: PropTypes.func.isRequired,
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
    } = this.props;

    return (
        <Loader loaded={isLoaded}>
          <SelfList selfList={selfList}/>
        </Loader>
    )
  }
}

function mapStateToProps(state) {
  const selfList = state.get('selfList');

  return {
    selfList: selfList.get('selfList'),
    isLoaded: selfList.get('isLoaded'),
    isError: selfList.get('isError'),
  };
}

export default connect(
    mapStateToProps,
    {fetchSelfList}
)(SelfPage);
