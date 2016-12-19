import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { Link } from 'react-router';

import { fetchSelf } from './AppHeaderActions';
import SelfCard from './SelfCard';

import { StyledHeader } from '../common/assets/styles/Header/StyledHeader';

class AppHeader extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchSelf: PropTypes.func.isRequired,
    self: PropTypes.object,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchSelf();
  }

  render() {

    const {
      self,
      isLoaded
    } = this.props;

    return (
      <Loader loaded={isLoaded}>
        <StyledHeader className="app">
          <div className="app-header">
            <Link to='/' className="logo-wrapper">
              <span className="logo-number">360&#176;</span>
              <span className="logo-name">Feedback</span>
            </Link>
          </div>
          <SelfCard self={self} isLoaded={isLoaded}/>
        </StyledHeader>
      </Loader>
    );
  }
}

function mapStateToProps(state) {
  const headerReducerState = state.get('headerReducer');

  return {
    self: headerReducerState.get('self'),
    isLoaded: headerReducerState.get('isLoaded'),
    isError: headerReducerState.get('isError'),
  };
}

export default connect(
  mapStateToProps,
  {fetchSelf},
)(AppHeader);
