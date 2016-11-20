import React, { Component } from 'react';
import styled from 'styled-components';

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
    font-weight: 900;
}

.logo-name {
    margin-left: 5px;
    color: #ed1848;
    font-weight: 900;
}
`;



class Header extends Component {
    render() {
        return (
            <StyledHeader className="App">
                <div className="App-header">
                    <span className="logo-wrapper">
                        <span className="logo-number">360&#176;</span>
                        <span className="logo-name">Feedback</span>
                    </span>
                </div>
            </StyledHeader>
        );
    }
}
export default Header;
