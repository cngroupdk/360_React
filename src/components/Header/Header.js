import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader';

import { fetchSelf } from './actions';
import SelfCard from './SelfCard';

const StyledHeader = styled.div`

    height: 50px;
    padding: 20px;

  .logo-wrapper {
    float: left;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
}

.logo-number {
    color: #073453;
    float: left;
}

.logo-name {
    margin-left: 5px;
    color: #ed1848;
}
`;



class Header extends Component {

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
            <StyledHeader className="App">
                <div className="App-header">
                    <span className="logo-wrapper">
                        <span className="logo-number">360&#176;</span>
                        <span className="logo-name">Feedback</span>
                    </span>
                </div>
                <SelfCard self={self} isLoaded={isLoaded}/>
            </StyledHeader>
                </Loader>
        );
    }
}

function mapStateToProps(state) {
    const self = state.get('self');

    return {
        self: self.get('self'),
        isLoaded: self.get('isLoaded'),
        isError: self.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchSelf},
)(Header);