import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { Link } from 'react-router';

import { selectors } from '../../selectors';

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
      viewer,
      viewerIsLoaded
    } = this.props;

    return (
      <Loader loaded={viewerIsLoaded}>
        <StyledHeader className="app">
          <div className="app-header">
            <Link to='/' className="logo-wrapper">
              <span className="logo-number">360&#176;</span>
              <span className="logo-name">Feedback</span>
            </Link>
          </div>
          <SelfCard viewer={viewer} isLoaded={viewerIsLoaded}/>
        </StyledHeader>
      </Loader>
    );
  }
}

function mapStateToProps(state) {
  const { getViewer, viewerIsLoaded, viewerIsError } = selectors.appHeader;

  return {
    viewer: getViewer(state),
    viewerIsLoaded: viewerIsLoaded(state),
    viewerIsError: viewerIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchSelf},
)(AppHeader);
